import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u39j05nim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u39j05nim"/>`,
		"fallback": "keyline-icons:shield-key-fill",
	});
}

export default Component;
