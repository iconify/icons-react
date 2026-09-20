import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zj6u0cbyc.css';
import '../../css/m/m82ys9b4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zj6u0cbyc"/><path class="m82ys9b4m"/></g>`,
		"fallback": "tdesign:send",
	});
}

export default Component;
