import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pp06kp_uu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pp06kp_uu"/>`,
		"fallback": "reicon:minus-square-filled",
	});
}

export default Component;
