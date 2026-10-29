import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/i6g3_sbrr.css';
import '../../css/w/wi2sckbls.css';
import '../../css/w/wgi9_72zv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="i6g3_sbrr"/><path class="wi2sckbls"/><path class="wgi9_72zv wm-a"/></g>`,
		"fallback": "withicons:rss-duo",
	});
}

export default Component;
