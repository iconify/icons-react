import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm1n4pbsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm1n4pbsa"/>`,
		"fallback": "uil:table",
	});
}

export default Component;
