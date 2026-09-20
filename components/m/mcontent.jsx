import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zif5q_b1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zif5q_b1e"/>`,
		"fallback": "token:mcontent",
	});
}

export default Component;
