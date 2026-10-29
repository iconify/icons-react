import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/awymiybbk.css';
import '../../css/o/o-q2u_bjl.css';
import '../../css/i/ifnoigbzc.css';
import '../../css/z/z1za6xq1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="awymiybbk wm-k"/><path class="o-q2u_bjl"/><path class="ifnoigbzc"/><path class="wm-s z1za6xq1c"/></g>`,
		"fallback": "withicons-bauhaus:pichkari",
	});
}

export default Component;
