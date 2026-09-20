import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dq78s-tqz.css';
import '../../css/h/h08_36bgu.css';
import '../../css/m/mn2c98bpy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dq78s-tqz"/><path class="h08_36bgu"/><path class="mn2c98bpy"/></g>`,
		"fallback": "streamline-ultimate:module-hands-puzzle",
	});
}

export default Component;
