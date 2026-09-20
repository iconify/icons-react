import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/t7hll3puf.css';
import '../../css/o/o0wdmnr6y.css';
import '../../css/l/lxutucssu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="t7hll3puf"/><path class="o0wdmnr6y"/><path class="lxutucssu"/></g>`,
		"fallback": "streamline-freehand:password-desktop-lock-approved",
	});
}

export default Component;
