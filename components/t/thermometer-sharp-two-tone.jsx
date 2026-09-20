import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/x/xkmafkb6z.css';
import '../../css/q/qjvz0db2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="xkmafkb6z"/><path class="qjvz0db2j"/></g>`,
		"fallback": "keyline-icons:thermometer-sharp-two-tone",
	});
}

export default Component;
