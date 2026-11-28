import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q9mhg2b_r.css';
import '../../css/o/o92xprdlg.css';
import '../../css/p/pdz0srsgu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="q9mhg2b_r"/><path class="o92xprdlg"/><path class="pdz0srsgu"/></g>`,
		"fallback": "iconaut:pear",
	});
}

export default Component;
