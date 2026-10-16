import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iljylxb4z.css';
import '../../css/x/x13ucgk-q.css';
import '../../css/u/ue4ujab8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 9.82 8.42)" class="iljylxb4z"/><rect transform="matrix(0 -1 -1 0 18.52 14.42)" class="iljylxb4z"/><rect transform="matrix(0 -1 -1 0 12.52 20.42)" class="iljylxb4z"/><path class="x13ucgk-q"/><rect transform="matrix(0 -1 -1 0 9.82 8.42)" class="ue4ujab8p"/><rect transform="matrix(0 -1 -1 0 18.52 14.42)" class="ue4ujab8p"/><rect transform="matrix(0 -1 -1 0 12.52 20.42)" class="ue4ujab8p"/></g>`,
		"fallback": "andrsrxn:sliders",
	});
}

export default Component;
