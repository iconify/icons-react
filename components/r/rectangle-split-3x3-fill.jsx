import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qnxzphb6h.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qnxzphb6h"/>`,
		"fallback": "f7:rectangle-split-3x3-fill",
	});
}

export default Component;
