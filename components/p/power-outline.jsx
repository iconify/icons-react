import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yedc29b5u.css';
import '../../css/x/xdemm2bpy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yedc29b5u"/><path class="xdemm2bpy"/>`,
		"fallback": "eva:power-outline",
	});
}

export default Component;
