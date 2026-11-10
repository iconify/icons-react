import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ndzb00b2t.css';
import '../../css/w/wj74v4bzh.css';
import '../../css/q/qimt7620e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ndzb00b2t"/><path class="wj74v4bzh"/><path class="qimt7620e"/></g>`,
		"fallback": "andrsrxn:repost-check",
	});
}

export default Component;
