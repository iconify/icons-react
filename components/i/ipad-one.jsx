import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/j/jz1kqxbte.css';
import '../../css/z/z22cny1_q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><rect class="jz1kqxbte"/><path class="z22cny1_q"/></g>`,
		"fallback": "icon-park-outline:ipad-one",
	});
}

export default Component;
