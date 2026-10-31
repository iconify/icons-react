import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tbqhub9ez.css';
import '../../css/p/p9fa6-bao.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="tbqhub9ez wm-k"/><path class="p9fa6-bao wm-a"/></g>`,
		"fallback": "withicons:scan-search-gloss",
	});
}

export default Component;
