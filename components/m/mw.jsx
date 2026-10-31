import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rx5qsly0i.css';
import '../../css/p/pakgukclm.css';
import '../../css/w/w81u6k22w.css';
import '../../css/c/c9w00ibyk.css';
import '../../css/z/z2wzabgtk.css';
import '../../css/l/lhywt2b5f.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rx5qsly0i"/><circle class="pakgukclm"/><path class="w81u6k22w"/><path class="c9w00ibyk"/><path class="z2wzabgtk"/><path class="lhywt2b5f"/></g>`,
		"fallback": "cif:mw",
	});
}

export default Component;
