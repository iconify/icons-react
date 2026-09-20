import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/d/dj05c4b-z.css';
import '../../css/d/dgmnhqb1q.css';
import '../../css/x/xcyk673ka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="dj05c4b-z"/><path class="dgmnhqb1q"/><path class="xcyk673ka"/></g>`,
		"fallback": "keyline-icons:thermometer-sun-sharp-duotone",
	});
}

export default Component;
