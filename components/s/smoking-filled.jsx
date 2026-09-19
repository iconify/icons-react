import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iyu5pxbvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iyu5pxbvf"/>`,
		"fallback": "griddy-icons:smoking-filled",
	});
}

export default Component;
