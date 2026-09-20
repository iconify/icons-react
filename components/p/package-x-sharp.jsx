import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhxz97bpy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhxz97bpy"/>`,
		"fallback": "keyline-icons:package-x-sharp",
	});
}

export default Component;
