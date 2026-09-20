import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aw9twle1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aw9twle1r"/>`,
		"fallback": "solar:quit-full-screen-square-outline",
	});
}

export default Component;
