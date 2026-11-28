import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/poupq6bos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="poupq6bos"/>`,
		"fallback": "iconaut:snapchat-solid",
	});
}

export default Component;
