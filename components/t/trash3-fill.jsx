import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fkgg58bfx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fkgg58bfx"/>`,
		"fallback": "bi:trash3-fill",
	});
}

export default Component;
