import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xecyk8bbz.css';
import '../../css/t/teea9nbsd.css';
import '../../css/c/c3tkfxbxy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xecyk8bbz"/><path class="teea9nbsd"/><path class="c3tkfxbxy"/></g>`,
		"fallback": "andrsrxn:warning-triangle",
	});
}

export default Component;
