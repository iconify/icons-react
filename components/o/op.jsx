import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vyxb2y9tx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vyxb2y9tx"/>`,
		"fallback": "token:op",
	});
}

export default Component;
