import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xt1wfk3et.css';
import '../../css/f/f_9wl8x9a.css';
import '../../css/m/mz_yvhbbs.css';
import '../../css/x/xzk11dbxp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xt1wfk3et"/><path class="f_9wl8x9a"/><path class="mz_yvhbbs"/><path class="xzk11dbxp"/></g>`,
		"fallback": "streamline-flex-color:polaroid-four",
	});
}

export default Component;
