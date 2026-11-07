import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fo3g6abcw.css';
import '../../css/w/wvyu5ibqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fo3g6abcw"/><path class="wvyu5ibqw"/>`,
		"fallback": "solar:login-2-bold",
	});
}

export default Component;
