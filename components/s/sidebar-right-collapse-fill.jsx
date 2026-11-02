import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-bor7bpy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-bor7bpy"/>`,
		"fallback": "mingcute:sidebar-right-collapse-fill",
	});
}

export default Component;
