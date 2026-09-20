import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/u3ill7jbr.css';
import '../../css/o/ownj1vbph.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="u3ill7jbr"/><path class="ownj1vbph"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:monitor-loop-circle",
	});
}

export default Component;
