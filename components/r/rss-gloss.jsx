import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wab6i4bpz.css';
import '../../css/v/vapqyrbix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="wab6i4bpz wm-k"/><path class="vapqyrbix wm-a"/></g>`,
		"fallback": "withicons:rss-gloss",
	});
}

export default Component;
