import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aajz77bdf.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aajz77bdf"/>`,
		"fallback": "pullo:sort-alphabetical-descending-thin",
	});
}

export default Component;
