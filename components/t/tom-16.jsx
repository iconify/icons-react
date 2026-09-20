import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhux28btr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhux28btr"/>`,
		"fallback": "qlementine-icons:tom-16",
	});
}

export default Component;
