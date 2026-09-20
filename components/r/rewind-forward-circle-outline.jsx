import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ug4jnhcxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ug4jnhcxr"/>`,
		"fallback": "solar:rewind-forward-circle-outline",
	});
}

export default Component;
