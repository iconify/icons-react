import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mxwf-gbta.css';
import '../../css/h/hju4ukl-v.css';
import '../../css/a/av_80xx9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="mxwf-gbta"/><path class="hju4ukl-v"/><path class="av_80xx9z"/></g>`,
		"fallback": "andrsrxn:message-quotes",
	});
}

export default Component;
