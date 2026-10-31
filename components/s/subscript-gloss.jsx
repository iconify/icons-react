import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/d1u29xb3h.css';
import '../../css/y/yqu4zac3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="d1u29xb3h wm-k"/><path class="wm-a yqu4zac3u"/></g>`,
		"fallback": "withicons:subscript-gloss",
	});
}

export default Component;
