import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvho9y7-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvho9y7-f"/>`,
		"fallback": "majesticons:megaphone-line",
	});
}

export default Component;
