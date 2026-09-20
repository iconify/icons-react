import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9v96drtp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z9v96drtp"/>`,
		"fallback": "majesticons:shooting-star-line",
	});
}

export default Component;
