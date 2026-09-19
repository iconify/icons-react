import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d1nfcimdh.css';

const viewBox = {"width":778,"height":739};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d1nfcimdh"/>`,
		"fallback": "ls:starempty",
	});
}

export default Component;
