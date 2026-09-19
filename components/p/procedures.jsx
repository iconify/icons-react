import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpoplb30j.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lpoplb30j"/>`,
		"fallback": "fa-solid:procedures",
	});
}

export default Component;
