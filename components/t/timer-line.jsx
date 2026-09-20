import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xz2ter_xn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xz2ter_xn"/>`,
		"fallback": "majesticons:timer-line",
	});
}

export default Component;
