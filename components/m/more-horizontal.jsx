import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ehquh7b1d.css';
import '../../css/k/kel1plyxk.css';
import '../../css/q/qi8avabeo.css';
import '../../css/b/bkuskmbcf.css';
import '../../css/p/px29b1b5z.css';
import '../../css/e/ef0y6obmc.css';
import '../../css/o/omex7ubpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ehquh7b1d wm-shadow"/><path class="kel1plyxk wm-shadow"/><path class="qi8avabeo"/><path class="bkuskmbcf"/><path class="px29b1b5z"/><path class="ef0y6obmc wm-shine"/><path class="omex7ubpl"/></g>`,
		"fallback": "withicons-skeuo:more-horizontal",
	});
}

export default Component;
