import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kwaaf0-ei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kwaaf0-ei"/>`,
		"fallback": "uil:minus-square",
	});
}

export default Component;
