import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/b/b0s53x16x.css';
import '../../css/j/jggwte4dz.css';
import '../../css/f/fnqqe5b5e.css';
import '../../css/c/c7xnwmbpp.css';
import '../../css/s/s0uyn-7lz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="b0s53x16x"/><path class="jggwte4dz wm-shine"/><path class="fnqqe5b5e wm-k"/><path class="c7xnwmbpp wm-a"/><path class="s0uyn-7lz wm-deco"/></g>`,
		"fallback": "withicons-kawaii:trash",
	});
}

export default Component;
