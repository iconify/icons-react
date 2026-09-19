import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ev7a6mbod.css';
import '../../css/h/hvelf-bxv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ev7a6mbod"/><path class="hvelf-bxv"/>`,
		"fallback": "boxicons:shopping-bag-alt",
	});
}

export default Component;
