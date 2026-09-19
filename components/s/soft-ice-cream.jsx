import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/buu83bc7q.css';
import '../../css/u/u6-gzybtm.css';
import '../../css/z/z3z28obht.css';
import '../../css/l/l0-y8h92r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="buu83bc7q"/><path class="u6-gzybtm"/><path class="z3z28obht"/><path class="l0-y8h92r"/></g>`,
		"fallback": "fluent-emoji-flat:soft-ice-cream",
	});
}

export default Component;
