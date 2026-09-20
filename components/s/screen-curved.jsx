import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/iklu0tnlu.css';
import '../../css/g/ga9fq_gnx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="iklu0tnlu"/><path class="ga9fq_gnx"/></g>`,
		"fallback": "streamline-freehand:screen-curved",
	});
}

export default Component;
