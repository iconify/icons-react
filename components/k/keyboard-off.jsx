import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sg0dq4bxe.css';
import '../../css/n/ngz6222nx.css';
import '../../css/q/q6ly_lxbl.css';
import '../../css/i/i2wbyxbqs.css';
import '../../css/k/kwmf-dr2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 22.32 19.48)" class="sg0dq4bxe"/><rect transform="matrix(0 -1 -1 0 22.32 19.48)" class="ngz6222nx"/><path class="q6ly_lxbl"/><path class="i2wbyxbqs"/><path class="kwmf-dr2k"/></g>`,
		"fallback": "andrsrxn:keyboard-off",
	});
}

export default Component;
