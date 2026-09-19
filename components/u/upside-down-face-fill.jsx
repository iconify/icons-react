import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gj98js00o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gj98js00o"/>`,
		"fallback": "iconamoon:upside-down-face-fill",
	});
}

export default Component;
