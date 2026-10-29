import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/i/ic7dicpil.css';
import '../../css/w/wr92o1bsm.css';
import '../../css/c/c21_rfw1c.css';
import '../../css/k/kbxro98gm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="ic7dicpil wm-deco"/><path class="wm-deco wr92o1bsm"/><path class="c21_rfw1c wm-k"/><path class="kbxro98gm wm-a"/></g>`,
		"fallback": "withicons:wallet-blueprint",
	});
}

export default Component;
