import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/p/p058992qq.css';
import '../../css/i/i4d76icce.css';
import '../../css/k/kdp6-qbqa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><circle class="p058992qq"/><path class="i4d76icce"/><path class="kdp6-qbqa"/></g>`,
		"fallback": "lets-icons:sad-alt-light",
	});
}

export default Component;
