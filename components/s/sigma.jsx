import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/upezbjbur.css';
import '../../css/i/i1h5cac9h.css';
import '../../css/p/p9qsivopf.css';
import '../../css/y/y4-o26bfb.css';
import '../../css/i/ihlb1mber.css';
import '../../css/r/rpret94oi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="upezbjbur wm-shadow"/><path class="i1h5cac9h wm-k"/><path class="p9qsivopf wm-k"/><path class="wm-k y4-o26bfb"/><path class="ihlb1mber wm-k"/><path class="rpret94oi wm-shine"/></g>`,
		"fallback": "withicons-coquette:sigma",
	});
}

export default Component;
