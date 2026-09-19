import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g49kx7b8q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g49kx7b8q"/>`,
		"fallback": "bi:paperclip",
	});
}

export default Component;
