import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gjpqb1bif.css';
import '../../css/d/dge4tumgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="gjpqb1bif wm-k"/><path class="dge4tumgo wm-a"/></g>`,
		"fallback": "withicons:log-out-gloss",
	});
}

export default Component;
