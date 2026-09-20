import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dbq7igb1x.css';
import '../../css/s/swsqnccnl.css';
import '../../css/e/e_aw4b_ji.css';
import '../../css/b/bmmk3xbih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="dbq7igb1x"/><path class="swsqnccnl"/><path class="e_aw4b_ji"/><path class="bmmk3xbih"/></g>`,
		"fallback": "streamline-freehand:office-file-text-graph",
	});
}

export default Component;
