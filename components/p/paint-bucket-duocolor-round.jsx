import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xsgqi2bof.css';
import '../../css/j/jx9cq1bfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xsgqi2bof"/><path class="jx9cq1bfm"/></g>`,
		"fallback": "coolicons:paint-bucket-duocolor-round",
	});
}

export default Component;
