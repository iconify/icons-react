import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vu1v9lbzp.css';
import '../../css/t/t83-cqwwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vu1v9lbzp"/><path class="t83-cqwwl"/></g>`,
		"fallback": "hugeicons:magic-wand-05",
	});
}

export default Component;
