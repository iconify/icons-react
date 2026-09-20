import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozn0_bc3j.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ozn0_bc3j"/>`,
		"fallback": "lineicons:menu-meatballs-1",
	});
}

export default Component;
