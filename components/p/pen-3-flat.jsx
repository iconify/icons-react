import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q0sawto7v.css';
import '../../css/f/f303xd4js.css';
import '../../css/x/xevrkbuac.css';
import '../../css/u/ushxrwbsh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q0sawto7v"/><path class="f303xd4js"/><path clip-rule="evenodd" class="xevrkbuac"/><path class="ushxrwbsh"/></g>`,
		"fallback": "streamline-color:pen-3-flat",
	});
}

export default Component;
