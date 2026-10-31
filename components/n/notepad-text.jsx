import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s2-cudgzz.css';
import '../../css/n/nuotczzel.css';
import '../../css/w/wlabr1bst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s2-cudgzz wm-k"/><path class="nuotczzel wm-shine"/><path class="wlabr1bst wm-shine"/></g>`,
		"fallback": "withicons-lunar:notepad-text",
	});
}

export default Component;
