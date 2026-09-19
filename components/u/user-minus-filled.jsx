import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqv09lbxb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqv09lbxb"/>`,
		"fallback": "boxicons:user-minus-filled",
	});
}

export default Component;
