import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/q1-o9obxf.css';
import '../../css/o/o-ykjtgrt.css';
import '../../css/q/qhf8v1bth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="q1-o9obxf"/><path class="o-ykjtgrt"/><path class="qhf8v1bth"/></g>`,
		"fallback": "iconoir:pen-tablet-connect-wifi",
	});
}

export default Component;
