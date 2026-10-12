import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bd4xn8bow.css';
import '../../css/q/qx-zeabyw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bd4xn8bow"/><path class="qx-zeabyw"/></g>`,
		"fallback": "lucide-extended:scan-square-duotone",
	});
}

export default Component;
