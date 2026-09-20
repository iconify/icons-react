import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wx8ck-b8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wx8ck-b8o"/>`,
		"fallback": "uil:music-note",
	});
}

export default Component;
