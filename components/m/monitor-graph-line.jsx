import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ei5ascb-z.css';
import '../../css/p/p479tuxrf.css';
import '../../css/h/hwwuzvdfe.css';
import '../../css/a/aiuqk3wdb.css';
import '../../css/p/ptra1_xhf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ei5ascb-z"/><path class="p479tuxrf"/><path class="hwwuzvdfe"/><path class="aiuqk3wdb"/><path class="ptra1_xhf"/></g>`,
		"fallback": "streamline-ultimate-color:monitor-graph-line",
	});
}

export default Component;
