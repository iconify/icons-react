import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/y/y28btccsp.css';
import '../../css/x/xcyk673ka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="y28btccsp"/><path class="xcyk673ka"/></g>`,
		"fallback": "keyline-icons:thermometer-snowflake-sharp",
	});
}

export default Component;
