import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ko1t5iyft.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ko1t5iyft"/>`,
		"fallback": "fa6-solid:venus-double",
	});
}

export default Component;
