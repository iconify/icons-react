import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cc6qyrb-v.css';
import '../../css/q/qrq26sblb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cc6qyrb-v"/><path class="qrq26sblb"/>`,
		"fallback": "carbon:unsaved",
	});
}

export default Component;
