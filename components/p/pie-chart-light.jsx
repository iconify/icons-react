import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/m/m4l-9ybuj.css';
import '../../css/d/dxjk72bvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><circle class="m4l-9ybuj"/><path class="dxjk72bvi"/></g>`,
		"fallback": "lets-icons:pie-chart-light",
	});
}

export default Component;
