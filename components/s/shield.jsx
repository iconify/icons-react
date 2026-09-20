import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g9aztl2nn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g9aztl2nn"/>`,
		"fallback": "zondicons:shield",
	});
}

export default Component;
