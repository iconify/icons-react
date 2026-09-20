import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4nvcjb4v.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z4nvcjb4v"/>`,
		"fallback": "thesvg-color:reactnative",
	});
}

export default Component;
