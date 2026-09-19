import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/myrpatbnz.css';
import '../../css/u/u1ml7p6aa.css';
import '../../css/x/xibwbdbhh.css';
import '../../css/e/eieyzobuz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="myrpatbnz"/><path class="u1ml7p6aa"/><path class="xibwbdbhh"/><path class="eieyzobuz"/></g>`,
		"fallback": "iconoir:usb-solid",
	});
}

export default Component;
