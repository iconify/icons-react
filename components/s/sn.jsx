import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dwu9b_0ii.css';
import '../../css/b/brwhfzbzk.css';
import '../../css/n/nqmsydbey.css';
import '../../css/r/r3aa4jbvc.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dwu9b_0ii"/><path class="brwhfzbzk"/><path class="nqmsydbey"/><path class="r3aa4jbvc"/></g>`,
		"fallback": "cif:sn",
	});
}

export default Component;
