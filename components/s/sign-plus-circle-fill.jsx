import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7cu91b7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u7cu91b7n"/>`,
		"fallback": "iconamoon:sign-plus-circle-fill",
	});
}

export default Component;
