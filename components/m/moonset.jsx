import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7k-s0i3q.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c7k-s0i3q"/>`,
		"fallback": "wi:moonset",
	});
}

export default Component;
