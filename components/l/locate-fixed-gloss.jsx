import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/a96leybgr.css';
import '../../css/k/ka2_jbcbf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="a96leybgr wm-k"/><path class="ka2_jbcbf wm-a"/></g>`,
		"fallback": "withicons:locate-fixed-gloss",
	});
}

export default Component;
