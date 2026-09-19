import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rla7-lvwp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rla7-lvwp"/>`,
		"fallback": "iconamoon:menu-kebab-horizontal",
	});
}

export default Component;
