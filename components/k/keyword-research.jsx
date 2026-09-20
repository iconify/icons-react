import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o5z5kabyv.css';
import '../../css/k/kd452xpng.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o5z5kabyv"/><path class="kd452xpng"/>`,
		"fallback": "lineicons:keyword-research",
	});
}

export default Component;
