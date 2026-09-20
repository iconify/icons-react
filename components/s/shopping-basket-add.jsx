import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i9rcrfbig.css';
import '../../css/q/q65i18pyv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i9rcrfbig"/><path class="q65i18pyv"/></g>`,
		"fallback": "streamline-flex-color:shopping-basket-add",
	});
}

export default Component;
