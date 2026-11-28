import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6hsf421h.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k6hsf421h"/>`,
		"fallback": "pullo:text-wrap-slash-light",
	});
}

export default Component;
