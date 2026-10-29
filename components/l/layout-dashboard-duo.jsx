import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yemifnaad.css';
import '../../css/o/ow8ez-lyq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="yemifnaad"/><path class="ow8ez-lyq"/></g>`,
		"fallback": "withicons:layout-dashboard-duo",
	});
}

export default Component;
