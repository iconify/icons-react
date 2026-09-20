import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft1yr5mlj.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ft1yr5mlj"/>`,
		"fallback": "lineicons:star-empty",
	});
}

export default Component;
