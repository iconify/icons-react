import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fyj6f_96p.css';
import '../../css/z/zm31xdjdj.css';
import '../../css/b/bam9j08kr.css';
import '../../css/z/zhb5zk9go.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fyj6f_96p"/><path clip-rule="evenodd" class="zm31xdjdj"/><path class="bam9j08kr"/><path class="zhb5zk9go"/></g>`,
		"fallback": "andrsrxn:lasso-cursor",
	});
}

export default Component;
