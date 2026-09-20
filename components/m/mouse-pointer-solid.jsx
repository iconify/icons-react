import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ff1u0l6vg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ff1u0l6vg"/>`,
		"fallback": "la:mouse-pointer-solid",
	});
}

export default Component;
