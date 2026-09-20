import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/halqu7b3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="halqu7b3f"/>`,
		"fallback": "thesvg-color:nike",
	});
}

export default Component;
