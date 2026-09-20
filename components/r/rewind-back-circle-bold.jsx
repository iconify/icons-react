import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6pft2bos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y6pft2bos"/>`,
		"fallback": "solar:rewind-back-circle-bold",
	});
}

export default Component;
