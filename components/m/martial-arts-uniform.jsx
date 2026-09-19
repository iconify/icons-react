import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n4ubhac1h.css';
import '../../css/b/baurxvh6y.css';
import '../../css/q/q9vst37-c.css';
import '../../css/u/uc6hm8b2k.css';
import '../../css/l/lxkgf6blh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n4ubhac1h"/><path class="baurxvh6y"/><path class="q9vst37-c"/><path class="uc6hm8b2k"/><path class="lxkgf6blh"/></g>`,
		"fallback": "fluent-emoji-flat:martial-arts-uniform",
	});
}

export default Component;
