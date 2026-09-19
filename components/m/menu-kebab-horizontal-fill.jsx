import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/riu0g0nxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="riu0g0nxf"/>`,
		"fallback": "iconamoon:menu-kebab-horizontal-fill",
	});
}

export default Component;
