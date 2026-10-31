import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mqzlugbkx.css';
import '../../css/d/dmiruqeec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mqzlugbkx"/><path class="dmiruqeec"/></g>`,
		"fallback": "coolicons:user-search-corner-duotone-round",
	});
}

export default Component;
