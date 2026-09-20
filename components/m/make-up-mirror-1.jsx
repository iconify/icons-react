import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rh5y-abqu.css';
import '../../css/q/q07hktb8w.css';
import '../../css/z/z--x9ywsg.css';
import '../../css/k/k28bzfb1z.css';
import '../../css/l/l_xqixbvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rh5y-abqu"/><path class="q07hktb8w"/><path class="z--x9ywsg"/><path class="k28bzfb1z"/><path class="l_xqixbvo"/></g>`,
		"fallback": "streamline-ultimate-color:make-up-mirror-1",
	});
}

export default Component;
