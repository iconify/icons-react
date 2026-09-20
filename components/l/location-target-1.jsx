import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/osw40db5q.css';
import '../../css/q/qo3k9bbgr.css';
import '../../css/q/qr8rz9ijj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="osw40db5q"/><path class="qo3k9bbgr"/><path class="qr8rz9ijj"/></g>`,
		"fallback": "streamline-color:location-target-1",
	});
}

export default Component;
