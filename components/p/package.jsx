import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/o/oyx_9jtno.css';
import '../../css/o/oc7a7eb5p.css';
import '../../css/n/n8ucc0y7x.css';
import '../../css/u/uncflbb5q.css';
import '../../css/x/xt92fd6te.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="oyx_9jtno"/><path class="oc7a7eb5p wm-shine"/><path class="n8ucc0y7x wm-k"/><path class="uncflbb5q wm-a"/><path class="wm-deco xt92fd6te"/></g>`,
		"fallback": "withicons-kawaii:package",
	});
}

export default Component;
