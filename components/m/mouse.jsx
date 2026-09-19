import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3g7597sg.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3g7597sg"/>`,
		"fallback": "fa-solid:mouse",
	});
}

export default Component;
