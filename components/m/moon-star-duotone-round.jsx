import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x0b38wjok.css';
import '../../css/j/jc3ecvb3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x0b38wjok"/><path class="jc3ecvb3z"/></g>`,
		"fallback": "coolicons:moon-star-duotone-round",
	});
}

export default Component;
