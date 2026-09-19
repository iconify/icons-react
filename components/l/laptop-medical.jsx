import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkcunqb_k.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dkcunqb_k"/>`,
		"fallback": "fa7-solid:laptop-medical",
	});
}

export default Component;
