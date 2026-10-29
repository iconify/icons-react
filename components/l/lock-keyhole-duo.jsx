import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kg72hp23p.css';
import '../../css/r/rz5awjbfy.css';
import '../../css/b/b86buo32x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="kg72hp23p"/><path class="rz5awjbfy wm-a"/><path class="b86buo32x"/></g>`,
		"fallback": "withicons:lock-keyhole-duo",
	});
}

export default Component;
