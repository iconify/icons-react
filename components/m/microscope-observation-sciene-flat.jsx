import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cblr8480p.css';
import '../../css/c/ccltmjb-w.css';
import '../../css/d/drfqso9ex.css';
import '../../css/t/trdammbet.css';
import '../../css/w/w0nqb2bxk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cblr8480p"/><path clip-rule="evenodd" class="ccltmjb-w"/><path class="drfqso9ex"/><path class="trdammbet"/><path class="w0nqb2bxk"/></g>`,
		"fallback": "streamline-plump-color:microscope-observation-sciene-flat",
	});
}

export default Component;
