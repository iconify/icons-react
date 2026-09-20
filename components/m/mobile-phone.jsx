import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfyep0bnp.css';
import '../../css/a/a8ubjjxwt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfyep0bnp"/><path class="a8ubjjxwt"/>`,
		"fallback": "streamline-pixel:mobile-phone",
	});
}

export default Component;
