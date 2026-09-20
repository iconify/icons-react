import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jirnh6bkq.css';
import '../../css/p/pbiqa0bvs.css';
import '../../css/l/linv_ibmn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="jirnh6bkq"/><path class="pbiqa0bvs"/><path class="linv_ibmn"/></g>`,
		"fallback": "streamline-freehand:phone-retro-1",
	});
}

export default Component;
