import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0e1_pbyx.css';
import '../../css/a/a7x3g_3uk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0e1_pbyx"/><path clip-rule="evenodd" class="a7x3g_3uk"/>`,
		"fallback": "solar:masks-bold",
	});
}

export default Component;
