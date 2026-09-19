import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t95140brd.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t95140brd"/>`,
		"fallback": "fa-brands:odnoklassniki",
	});
}

export default Component;
