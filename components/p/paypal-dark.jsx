import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qw_8glqog.css';
import '../../css/t/tmnz0vbmc.css';
import '../../css/f/f_quf2bof.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qw_8glqog"/><path class="tmnz0vbmc"/><path class="f_quf2bof"/>`,
		"fallback": "selfhst:paypal-dark",
	});
}

export default Component;
