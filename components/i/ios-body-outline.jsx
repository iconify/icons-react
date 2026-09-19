import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qyglj2bnx.css';
import '../../css/d/dkassfuyo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qyglj2bnx"/><path class="dkassfuyo"/>`,
		"fallback": "ion:ios-body-outline",
	});
}

export default Component;
