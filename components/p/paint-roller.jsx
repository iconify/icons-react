import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yn2u72yrp.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yn2u72yrp"/>`,
		"fallback": "lineicons:paint-roller",
	});
}

export default Component;
