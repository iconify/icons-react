import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kuk2eibqb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kuk2eibqb"/>`,
		"fallback": "boxicons:note",
	});
}

export default Component;
