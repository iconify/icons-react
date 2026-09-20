import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iarsg9_lk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iarsg9_lk"/>`,
		"fallback": "uil:star",
	});
}

export default Component;
