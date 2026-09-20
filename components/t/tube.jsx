import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcdsv_bpy.css';

const viewBox = {"width":24,"height":24,"left":-9,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pcdsv_bpy"/>`,
		"fallback": "jam:tube",
	});
}

export default Component;
