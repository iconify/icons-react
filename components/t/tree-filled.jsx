import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1-c0l79h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1-c0l79h"/>`,
		"fallback": "griddy-icons:tree-filled",
	});
}

export default Component;
