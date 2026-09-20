import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xkhbt_79b.css';
import '../../css/f/f49833nfr.css';
import '../../css/r/rolha4znv.css';
import '../../css/a/ab51s-bxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xkhbt_79b"/><path class="f49833nfr"/><path clip-rule="evenodd" class="rolha4znv"/><path class="ab51s-bxq"/></g>`,
		"fallback": "lets-icons:speed-duotone-line",
	});
}

export default Component;
