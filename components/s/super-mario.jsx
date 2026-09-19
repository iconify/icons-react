import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vdl_oacln.css';
import '../../css/a/a21aejbzt.css';
import '../../css/d/dkiuhbb3a.css';
import '../../css/o/ol4634bna.css';
import '../../css/o/oqwhjwboa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vdl_oacln"/><path class="a21aejbzt"/><path class="dkiuhbb3a"/><path class="ol4634bna"/><path class="oqwhjwboa"/></g>`,
		"fallback": "hugeicons:super-mario",
	});
}

export default Component;
