import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qkaf7bbmk.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qkaf7bbmk"/>`,
		"fallback": "f7:square-stack-3d-up-fill",
	});
}

export default Component;
