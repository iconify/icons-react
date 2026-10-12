import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w9--6fbab.css';
import '../../css/m/mt-o-cafs.css';
import '../../css/a/anrq5_bnx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="w9--6fbab"/><path class="mt-o-cafs"/><path class="anrq5_bnx"/></g>`,
		"fallback": "andrsrxn:stroke-linejoin-bevel",
	});
}

export default Component;
