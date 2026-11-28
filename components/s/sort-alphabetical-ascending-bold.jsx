import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdfu06-uh.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cdfu06-uh"/>`,
		"fallback": "pullo:sort-alphabetical-ascending-bold",
	});
}

export default Component;
