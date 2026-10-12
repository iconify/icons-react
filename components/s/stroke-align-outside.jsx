import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/no1df2bgu.css';
import '../../css/x/xkm9zugsj.css';
import '../../css/n/nprl0tq2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="no1df2bgu"/><path class="xkm9zugsj"/><path class="nprl0tq2r"/></g>`,
		"fallback": "andrsrxn:stroke-align-outside",
	});
}

export default Component;
