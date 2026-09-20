import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ij1w0bbue.css';
import '../../css/q/qsovutbiq.css';
import '../../css/e/e_raf5bng.css';
import '../../css/d/dbe1d0bnt.css';
import '../../css/c/cw1nr3o_g.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/u/urifjtb8z.css';
import '../../css/f/fueg03b6r.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="ij1w0bbue"/><path class="qsovutbiq"/><g class="e_raf5bng"><path class="dbe1d0bnt"/><path class="cw1nr3o_g"/></g><g class="brzn_0bpr"><ellipse class="urifjtb8z"/><path class="fueg03b6r"/></g>`,
		"fallback": "openmoji:roasted-coffee-bean",
	});
}

export default Component;
