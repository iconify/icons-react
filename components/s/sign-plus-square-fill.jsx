import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q11hb9bjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q11hb9bjd"/>`,
		"fallback": "iconamoon:sign-plus-square-fill",
	});
}

export default Component;
