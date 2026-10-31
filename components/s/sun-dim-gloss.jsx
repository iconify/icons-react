import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tjp42_bqi.css';
import '../../css/v/vgxfh4_8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="tjp42_bqi wm-k"/><path class="vgxfh4_8d wm-a"/></g>`,
		"fallback": "withicons:sun-dim-gloss",
	});
}

export default Component;
