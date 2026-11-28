import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctzeushfl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ctzeushfl"/>`,
		"fallback": "noviair-light:parking-x",
	});
}

export default Component;
