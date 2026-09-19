import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tkc96qbez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tkc96qbez"/>`,
		"fallback": "circum:penpot",
	});
}

export default Component;
