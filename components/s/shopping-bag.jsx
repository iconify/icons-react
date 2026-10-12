import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nxlg18n3b.css';
import '../../css/w/wn85pzjmj.css';
import '../../css/m/ml2j5ib2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nxlg18n3b"/><path class="wn85pzjmj"/><path class="ml2j5ib2p"/></g>`,
		"fallback": "andrsrxn:shopping-bag",
	});
}

export default Component;
