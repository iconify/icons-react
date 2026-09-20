import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p9p486bos.css';
import '../../css/h/hu2fbr1wg.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p9p486bos"/><path class="hu2fbr1wg"/></g>`,
		"fallback": "thesvg-color:nuqs-dark",
	});
}

export default Component;
