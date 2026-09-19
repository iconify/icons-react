import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ov7zt-b6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ov7zt-b6s"/>`,
		"fallback": "iconamoon:menu-kebab-horizontal-bold",
	});
}

export default Component;
