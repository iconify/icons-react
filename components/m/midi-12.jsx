import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cd1zhtkzb.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cd1zhtkzb"/>`,
		"fallback": "qlementine-icons:midi-12",
	});
}

export default Component;
