import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/f/fznb90gae.css';
import '../../css/e/e51_i-bxj.css';
import '../../css/s/slj-q6j2r.css';
import '../../css/x/xpzch8yxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="fznb90gae"/><path class="e51_i-bxj"/><path class="slj-q6j2r"/><path class="xpzch8yxc"/></g>`,
		"fallback": "lets-icons:refresh-2-light",
	});
}

export default Component;
