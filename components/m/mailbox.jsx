import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k6-9zxb8v.css';
import '../../css/u/undmg4mvr.css';
import '../../css/i/iisbrfaoj.css';
import '../../css/c/cebkxeecy.css';
import '../../css/v/vewtb-07j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k6-9zxb8v"/><path class="undmg4mvr"/><path class="iisbrfaoj"/><path class="cebkxeecy"/><path class="vewtb-07j"/></g>`,
		"fallback": "andrsrxn:mailbox",
	});
}

export default Component;
