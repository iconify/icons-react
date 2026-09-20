import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rtx68vr7c.css';
import '../../css/u/uv6vbvbap.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rtx68vr7c"/><path class="uv6vbvbap"/></g>`,
		"fallback": "streamline-color:navigation-arrow-off",
	});
}

export default Component;
