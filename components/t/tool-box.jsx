import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l4hlqekzg.css';
import '../../css/o/o3xs61euo.css';
import '../../css/k/kcuzayj_q.css';
import '../../css/g/gmoqjm-2e.css';
import '../../css/p/piuomjbuy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l4hlqekzg"/><path class="o3xs61euo"/><path class="kcuzayj_q"/><path class="gmoqjm-2e"/><path class="piuomjbuy"/></g>`,
		"fallback": "streamline-ultimate-color:tool-box",
	});
}

export default Component;
