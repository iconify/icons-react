import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iee926bzu.css';
import '../../css/i/ibx7eabqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iee926bzu"/><path class="ibx7eabqr"/></g>`,
		"fallback": "tdesign:user-time",
	});
}

export default Component;
