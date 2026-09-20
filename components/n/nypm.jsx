import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w6-avjbte.css';
import '../../css/k/k7nkfab8q.css';
import '../../css/j/jk66utbvk.css';
import '../../css/z/zc3fgvb5k.css';
import '../../css/z/ztms5l77i.css';
import '../../css/b/bz7x-ybio.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w6-avjbte"/><path class="k7nkfab8q"/><path class="jk66utbvk"/><path class="zc3fgvb5k"/><path class="ztms5l77i"/><path class="bz7x-ybio"/></g>`,
		"fallback": "unjs:nypm",
	});
}

export default Component;
