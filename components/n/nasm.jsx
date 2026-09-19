import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqe_-bb2i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eqe_-bb2i"/>`,
		"fallback": "file-icons:nasm",
	});
}

export default Component;
