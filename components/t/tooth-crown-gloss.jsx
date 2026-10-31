import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bgtxjs53i.css';
import '../../css/b/bakrh7mmh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="bgtxjs53i wm-k"/><path class="bakrh7mmh wm-a"/></g>`,
		"fallback": "withicons:tooth-crown-gloss",
	});
}

export default Component;
