import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g5ihl6w8c.css';
import '../../css/g/g_qx38h4f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g5ihl6w8c"/><path class="g_qx38h4f"/></g>`,
		"fallback": "streamline-color:refrigerator",
	});
}

export default Component;
