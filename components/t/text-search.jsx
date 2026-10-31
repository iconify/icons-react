import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/k/kckxeebmo.css';
import '../../css/a/aa7tep0-b.css';
import '../../css/g/gz4rmvf3e.css';
import '../../css/w/wtwdiqbwi.css';
import '../../css/z/zif4qpbus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="kckxeebmo"/><path class="aa7tep0-b wm-shine"/><path class="gz4rmvf3e wm-k"/><path class="wm-a wtwdiqbwi"/><path class="wm-deco zif4qpbus"/></g>`,
		"fallback": "withicons-kawaii:text-search",
	});
}

export default Component;
