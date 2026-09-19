import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/w/wfbc2vdio.css';
import '../../css/c/c9wqi7bil.css';
import '../../css/o/o86yh-b_x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><rect class="wfbc2vdio"/><path class="c9wqi7bil"/><path class="o86yh-b_x"/></g>`,
		"fallback": "icon-park:voice",
	});
}

export default Component;
