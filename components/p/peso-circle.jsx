import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tzg2kx1di.css';
import '../../css/i/ixk3xbb2f.css';
import '../../css/n/n00si1kmg.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="tzg2kx1di"/><path class="ixk3xbb2f"/><path class="n00si1kmg"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:peso-circle",
	});
}

export default Component;
