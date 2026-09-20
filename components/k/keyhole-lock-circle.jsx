import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qlg8tl7wx.css';
import '../../css/k/kshof5b-l.css';
import '../../css/x/xjfc-xbtr.css';
import '../../css/q/qn-u0acto.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qlg8tl7wx"/><path class="kshof5b-l"/><path class="xjfc-xbtr"/><path class="qn-u0acto"/></g>`,
		"fallback": "streamline-color:keyhole-lock-circle",
	});
}

export default Component;
