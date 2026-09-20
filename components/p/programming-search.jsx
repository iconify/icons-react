import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mv_663bfp.css';
import '../../css/o/ozvslvb3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="mv_663bfp"/><path class="ozvslvb3g"/></g>`,
		"fallback": "streamline-freehand:programming-search",
	});
}

export default Component;
