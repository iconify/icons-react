import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/ft6d_gblz.css';
import '../../css/b/bjf85qb1h.css';
import '../../css/y/y_gbgacre.css';
import '../../css/w/wa21ymbkm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ft6d_gblz"/><path class="bjf85qb1h wm-k"/><path class="wm-k y_gbgacre"/><path class="wa21ymbkm wm-a"/></g>`,
		"fallback": "withicons:save-sketch",
	});
}

export default Component;
