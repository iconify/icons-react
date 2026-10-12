import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aa7_p1bdj.css';
import '../../css/q/qsuyhd5qb.css';
import '../../css/c/czmevebqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="aa7_p1bdj"/><path class="qsuyhd5qb"/><path class="czmevebqv"/></g>`,
		"fallback": "andrsrxn:toggle",
	});
}

export default Component;
