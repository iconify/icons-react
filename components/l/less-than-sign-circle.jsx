import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hf2sdebss.css';
import '../../css/o/olccmib3h.css';
import '../../css/j/jfcck1brq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hf2sdebss"/><path class="olccmib3h"/><path class="jfcck1brq"/></g>`,
		"fallback": "streamline-flex-color:less-than-sign-circle",
	});
}

export default Component;
