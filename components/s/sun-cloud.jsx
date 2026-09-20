import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f5rpebc0l.css';
import '../../css/q/qcg7m2bgq.css';
import '../../css/v/vezvibchg.css';
import '../../css/z/z5eaxhbyw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f5rpebc0l"/><path class="qcg7m2bgq"/><path class="vezvibchg"/><path class="z5eaxhbyw"/></g>`,
		"fallback": "streamline-color:sun-cloud",
	});
}

export default Component;
