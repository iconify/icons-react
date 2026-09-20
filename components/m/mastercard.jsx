import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cg5mr5bpz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cg5mr5bpz"/>`,
		"fallback": "simple-icons:mastercard",
	});
}

export default Component;
