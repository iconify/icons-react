import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_1b4nnzz.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_1b4nnzz"/>`,
		"fallback": "fluent-mdl2:table-branded-column",
	});
}

export default Component;
