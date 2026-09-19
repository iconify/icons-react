import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4paypbcj.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q4paypbcj"/>`,
		"fallback": "f7:rotate-right-fill",
	});
}

export default Component;
