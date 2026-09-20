import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jadz-ybzz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jadz-ybzz"/>`,
		"fallback": "la:mars-stroke-solid",
	});
}

export default Component;
