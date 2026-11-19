import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b_-gkxb7l.css';
import '../../css/v/vzkhs6b9b.css';
import '../../css/e/efq519bfo.css';
import '../../css/f/f3ejc33el.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b_-gkxb7l"/><path class="vzkhs6b9b"/><path class="efq519bfo"/><path class="f3ejc33el"/></g>`,
		"fallback": "andrsrxn:user-currency",
	});
}

export default Component;
