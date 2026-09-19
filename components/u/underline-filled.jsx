import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ck1713rkc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ck1713rkc"/>`,
		"fallback": "boxicons:underline-filled",
	});
}

export default Component;
