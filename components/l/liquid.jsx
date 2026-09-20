import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chx002b5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="chx002b5v"/>`,
		"fallback": "thesvg-color:liquid",
	});
}

export default Component;
