import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pc3kirm1i.css';
import '../../css/n/n5821were.css';
import '../../css/z/zwvmvgb6p.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pc3kirm1i"/><path class="n5821were"/><path class="zwvmvgb6p"/>`,
		"fallback": "lineicons:scroll-down",
	});
}

export default Component;
