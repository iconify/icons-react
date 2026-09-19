import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kt_htbcmj.css';
import '../../css/a/ag187fmtm.css';
import '../../css/w/w6a8j9y3f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kt_htbcmj"/><path class="ag187fmtm"/><path class="w6a8j9y3f"/>`,
		"fallback": "fxemoji:openlock",
	});
}

export default Component;
