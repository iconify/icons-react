import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zcpwg3bpy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zcpwg3bpy"/>`,
		"fallback": "eva:moon-outline",
	});
}

export default Component;
