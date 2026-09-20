import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fzph24bzd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fzph24bzd"/>`,
		"fallback": "la:money-bill-solid",
	});
}

export default Component;
