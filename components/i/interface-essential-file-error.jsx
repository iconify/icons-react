import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ad24vzb3z.css';
import '../../css/i/isj0b6b0u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ad24vzb3z"/><path class="isj0b6b0u"/>`,
		"fallback": "streamline-pixel:interface-essential-file-error",
	});
}

export default Component;
