import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/coqe7zz9j.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="coqe7zz9j"/>`,
		"fallback": "fa-solid:tablet",
	});
}

export default Component;
