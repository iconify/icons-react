import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yck-3c46d.css';
import '../../css/s/s63kf5h6o.css';
import '../../css/y/ysd9pyvtr.css';
import '../../css/g/g4xa0cbln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="yck-3c46d"/><path class="s63kf5h6o"/><circle class="ysd9pyvtr"/><path class="g4xa0cbln"/></g>`,
		"fallback": "andrsrxn:speaker",
	});
}

export default Component;
