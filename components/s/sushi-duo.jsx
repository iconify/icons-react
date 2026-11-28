import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/enyryrbow.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/l-em5n3wu.css';
import '../../css/t/td39edehy.css';
import '../../css/g/gxcdsu0rs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="enyryrbow secondary"/><g class="dt0cm9dhy primary"><path class="l-em5n3wu"/><path class="td39edehy"/><path class="gxcdsu0rs"/></g>`,
		"fallback": "iconaut:sushi-duo",
	});
}

export default Component;
