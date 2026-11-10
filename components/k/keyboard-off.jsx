import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v41wkb5eq.css';
import '../../css/m/mhticqb4n.css';
import '../../css/j/j092x4i6a.css';
import '../../css/k/kwmf-dr2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v41wkb5eq"/><path class="mhticqb4n"/><path class="j092x4i6a"/><path class="kwmf-dr2k"/></g>`,
		"fallback": "andrsrxn:keyboard-off",
	});
}

export default Component;
