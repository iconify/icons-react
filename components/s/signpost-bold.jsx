import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbaq1ybrk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kbaq1ybrk"/>`,
		"fallback": "solar:signpost-bold",
	});
}

export default Component;
