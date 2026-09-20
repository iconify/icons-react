import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/td3wl89sj.css';
import '../../css/e/e6adbacsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="td3wl89sj"/><path class="e6adbacsn"/></g>`,
		"fallback": "tdesign:user-business",
	});
}

export default Component;
