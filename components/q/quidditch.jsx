import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hp92r26xg.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hp92r26xg"/>`,
		"fallback": "fa7-solid:quidditch",
	});
}

export default Component;
