import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k775brneu.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k775brneu"/>`,
		"fallback": "pullo:text-wrap-thin",
	});
}

export default Component;
