import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hs8trmb5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hs8trmb5x"/>`,
		"fallback": "majesticons:underline-line",
	});
}

export default Component;
