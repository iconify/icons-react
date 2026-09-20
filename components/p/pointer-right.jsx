import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kjqfn-boj.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kjqfn-boj"/>`,
		"fallback": "lineicons:pointer-right",
	});
}

export default Component;
