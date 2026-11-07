import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgk4i-bav.css';
import '../../css/z/zg_ctlurr.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/i/isjs2mp8q.css';
import '../../css/u/uag-dxbwf.css';
import '../../css/j/jm8-sxbet.css';
import '../../css/u/ule-b-vrh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgk4i-bav"/><path clip-rule="evenodd" class="zg_ctlurr"/><g class="xtpeb-edw"><path class="isjs2mp8q"/><path class="uag-dxbwf"/><path class="jm8-sxbet"/><path class="ule-b-vrh"/></g>`,
		"fallback": "solar:sun-2-bold-duotone",
	});
}

export default Component;
