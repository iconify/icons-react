import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6zw37b2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h6zw37b2r"/>`,
		"fallback": "griddy-icons:toothbrush-alt",
	});
}

export default Component;
