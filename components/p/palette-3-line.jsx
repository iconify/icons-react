import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chko4obfw.css';
import '../../css/m/m3xop7dba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="chko4obfw"/><path class="m3xop7dba"/>`,
		"fallback": "mingcute:palette-3-line",
	});
}

export default Component;
