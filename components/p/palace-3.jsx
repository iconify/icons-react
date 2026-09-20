import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ng7xchbrq.css';
import '../../css/d/d3h638b2w.css';
import '../../css/n/nndbuccry.css';
import '../../css/x/x46v9abcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ng7xchbrq"/><path class="d3h638b2w"/><path class="nndbuccry"/><path class="x46v9abcp"/></g>`,
		"fallback": "tdesign:palace-3",
	});
}

export default Component;
