import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/ypdidzbmq.css';
import '../../css/n/nxu3vipki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="wm-k ypdidzbmq"/><path class="nxu3vipki wm-a"/></g>`,
		"fallback": "withicons:pandal-gloss",
	});
}

export default Component;
