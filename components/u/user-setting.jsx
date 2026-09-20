import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/ki2y2qb2g.css';
import '../../css/m/m2toylbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ki2y2qb2g"/><path class="m2toylbvv"/></g>`,
		"fallback": "tdesign:user-setting",
	});
}

export default Component;
