import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bz_u2ccvo.css';
import '../../css/v/vvvujfs3y.css';
import '../../css/a/aidhi7otf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="bz_u2ccvo"/><path class="vvvujfs3y"/><path class="aidhi7otf"/></g>`,
		"fallback": "streamline-freehand:smart-watch-wrist",
	});
}

export default Component;
