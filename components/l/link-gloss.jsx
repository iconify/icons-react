import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/scqab7b7u.css';
import '../../css/j/jypo_3e0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="scqab7b7u wm-k"/><path class="jypo_3e0n wm-a"/></g>`,
		"fallback": "withicons:link-gloss",
	});
}

export default Component;
