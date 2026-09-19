import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rx5qsly0i.css';
import '../../css/x/xt9onw6rc.css';
import '../../css/z/zyed_2smu.css';
import '../../css/r/rwab7rbbu.css';
import '../../css/z/z2wzabgtk.css';
import '../../css/n/nyxwswb2i.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rx5qsly0i"/><circle class="xt9onw6rc"/><path class="zyed_2smu"/><path class="rwab7rbbu"/><path class="z2wzabgtk"/><path class="nyxwswb2i"/></g>`,
		"fallback": "cif:mw",
	});
}

export default Component;
