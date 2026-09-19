import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cn3v3rbfz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cn3v3rbfz"/>`,
		"fallback": "carbon:send-backward",
	});
}

export default Component;
