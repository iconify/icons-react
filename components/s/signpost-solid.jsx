import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wmd351-nz.css';
import '../../css/k/ke5h_qb3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="wmd351-nz"/><path class="ke5h_qb3l wm-a"/></g>`,
		"fallback": "withicons:signpost-solid",
	});
}

export default Component;
