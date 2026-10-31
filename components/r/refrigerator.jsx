import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dd4z6jb2q.css';
import '../../css/i/izequacgt.css';
import '../../css/g/gl2d66swc.css';
import '../../css/j/jzghkubrt.css';
import '../../css/l/l34hflkpt.css';
import '../../css/t/tagrcr7pu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dd4z6jb2q wm-k"/><path class="izequacgt wm-k"/><path class="gl2d66swc wm-k"/><path class="jzghkubrt wm-shadow"/><path class="l34hflkpt wm-shine"/><path class="tagrcr7pu wm-shine"/></g>`,
		"fallback": "withicons-valentine:refrigerator",
	});
}

export default Component;
