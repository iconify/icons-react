import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l154elbzm.css';
import '../../css/x/x86asg5-b.css';
import '../../css/v/vr8cxzv3r.css';
import '../../css/c/cs6i_ultf.css';
import '../../css/p/pzyl765_z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l154elbzm"/><path class="x86asg5-b"/><path class="vr8cxzv3r"/><path class="cs6i_ultf"/><path class="pzyl765_z"/></g>`,
		"fallback": "fluent-emoji-flat:saluting-face",
	});
}

export default Component;
