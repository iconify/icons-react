import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqiy1vb6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqiy1vb6j"/>`,
		"fallback": "token:sense",
	});
}

export default Component;
