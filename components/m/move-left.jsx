import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q-clg1bhh.css';
import '../../css/n/nsmo7pjfo.css';
import '../../css/y/yjxmwp68m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q-clg1bhh"/><path class="nsmo7pjfo"/><path class="yjxmwp68m"/></g>`,
		"fallback": "streamline-color:move-left",
	});
}

export default Component;
