import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/js8pr3blz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="js8pr3blz"/>`,
		"fallback": "heroicons:italic-16-solid",
	});
}

export default Component;
