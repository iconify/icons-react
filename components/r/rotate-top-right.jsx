import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ck_0vwbgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ck_0vwbgo"/>`,
		"fallback": "hugeicons:rotate-top-right",
	});
}

export default Component;
