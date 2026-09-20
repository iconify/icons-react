import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/l/l-k3q4bdh.css';
import '../../css/z/zjsv9h-ou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="l-k3q4bdh"/><path class="zjsv9h-ou"/></g>`,
		"fallback": "keyline-icons:type-outline-sharp-two-tone",
	});
}

export default Component;
