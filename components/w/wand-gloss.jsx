import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zhdzf_yjm.css';
import '../../css/z/zdexzbckk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="wm-k zhdzf_yjm"/><path class="wm-a zdexzbckk"/></g>`,
		"fallback": "withicons:wand-gloss",
	});
}

export default Component;
