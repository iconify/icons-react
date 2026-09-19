import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1a-g7buz.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1a-g7buz"/>`,
		"fallback": "fa7-solid:person-circle-question",
	});
}

export default Component;
