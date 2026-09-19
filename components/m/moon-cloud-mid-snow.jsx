import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/m/mdet3rbxm.css';
import '../../css/h/h76cb7bbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="mdet3rbxm"/><path class="h76cb7bbv"/></g>`,
		"fallback": "hugeicons:moon-cloud-mid-snow",
	});
}

export default Component;
