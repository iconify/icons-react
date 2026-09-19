import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ye5j1p-tl.css';
import '../../css/c/ca8-a7btp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ye5j1p-tl"/><path class="ca8-a7btp"/>`,
		"fallback": "bx:rename",
	});
}

export default Component;
