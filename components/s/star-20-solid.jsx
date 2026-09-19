import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0gng4b4k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j0gng4b4k"/>`,
		"fallback": "heroicons:star-20-solid",
	});
}

export default Component;
