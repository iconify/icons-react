import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zq-g7c1mn.css';
import '../../css/p/pt6vx7j6q.css';
import '../../css/s/sil16zbqy.css';
import '../../css/j/jg8ldyzlh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zq-g7c1mn"/><path class="pt6vx7j6q"/><rect transform="matrix(0 -1 .99957 -.02944 19.28 20.07)" class="sil16zbqy"/><path class="jg8ldyzlh"/></g>`,
		"fallback": "andrsrxn:scissors-comb",
	});
}

export default Component;
