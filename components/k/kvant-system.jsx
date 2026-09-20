import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kwxwddxbq.css';

const viewBox = {"width":200,"height":171};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kwxwddxbq"/>`,
		"fallback": "thesvg-color:kvant-system",
	});
}

export default Component;
