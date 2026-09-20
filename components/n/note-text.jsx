import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cklkrqb-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cklkrqb-j"/>`,
		"fallback": "mdi-light:note-text",
	});
}

export default Component;
