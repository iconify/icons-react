import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv77kib4x.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv77kib4x"/>`,
		"fallback": "qlementine-icons:notes-12",
	});
}

export default Component;
