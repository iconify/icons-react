import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbse8yb8q.css';

const viewBox = {"width":778,"height":222};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nbse8yb8q"/>`,
		"fallback": "thesvg-color:volta-dark",
	});
}

export default Component;
