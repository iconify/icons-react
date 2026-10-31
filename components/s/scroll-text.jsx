import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/f/fbc8kwbwg.css';
import '../../css/w/w6wfjvf_p.css';
import '../../css/j/j5ep5hbtz.css';
import '../../css/u/uc0yabbtt.css';
import '../../css/v/v_7hlxbxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="fbc8kwbwg"/><path class="w6wfjvf_p wm-shine"/><path class="j5ep5hbtz wm-k"/><path class="uc0yabbtt wm-a"/><path class="v_7hlxbxf wm-deco"/></g>`,
		"fallback": "withicons-kawaii:scroll-text",
	});
}

export default Component;
