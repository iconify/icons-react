import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qj0d_qbjt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qj0d_qbjt"/>`,
		"fallback": "streamline-pixel:interface-essential-search-check",
	});
}

export default Component;
