import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jczf2_bro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jczf2_bro"/>`,
		"fallback": "noviair-light:spoon",
	});
}

export default Component;
