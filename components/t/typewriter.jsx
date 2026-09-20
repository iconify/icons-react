import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cd57eebiu.css';
import '../../css/y/yo_lfyjws.css';
import '../../css/q/qr-gbve0k.css';
import '../../css/x/x808yy_8b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="cd57eebiu"/><path class="yo_lfyjws"/><path class="qr-gbve0k"/><path class="x808yy_8b"/></g>`,
		"fallback": "streamline-flex-color:typewriter",
	});
}

export default Component;
