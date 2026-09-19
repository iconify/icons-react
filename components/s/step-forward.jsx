import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqsoy3bnf.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqsoy3bnf"/>`,
		"fallback": "fa-solid:step-forward",
	});
}

export default Component;
