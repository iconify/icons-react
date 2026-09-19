import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ok0s64bty.css';
import '../../css/e/elrefzbys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ok0s64bty"/><path class="elrefzbys"/></g>`,
		"fallback": "hugeicons:move-down",
	});
}

export default Component;
