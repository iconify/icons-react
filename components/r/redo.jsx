import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twae0ibqk.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twae0ibqk"/>`,
		"fallback": "fad:redo",
	});
}

export default Component;
