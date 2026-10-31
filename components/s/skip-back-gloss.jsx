import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zhgzxacdn.css';
import '../../css/m/m_hn28b4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="wm-k zhgzxacdn"/><path class="m_hn28b4j wm-a"/></g>`,
		"fallback": "withicons:skip-back-gloss",
	});
}

export default Component;
