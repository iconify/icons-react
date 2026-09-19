import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ph7ywgniq.css';
import '../../css/p/ppczo4bnc.css';
import '../../css/q/qrfyc6bed.css';
import '../../css/r/rjpniljif.css';
import '../../css/f/frsjfwbll.css';
import '../../css/v/v3canabei.css';
import '../../css/k/kygbgobqf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ph7ywgniq"/><path class="ppczo4bnc"/><path class="qrfyc6bed"/><path class="rjpniljif"/><path class="frsjfwbll"/><path class="v3canabei"/><path class="kygbgobqf"/>`,
		"fallback": "flag:tv-1x1",
	});
}

export default Component;
