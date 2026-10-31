import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/rdm7swbci.css';
import '../../css/w/wu226ccgn.css';
import '../../css/h/h4kim_4pi.css';
import '../../css/y/yur9gvbnw.css';
import '../../css/o/ogvhkob-h.css';
import '../../css/l/lkafr4bxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="rdm7swbci wm-shadow"/><path class="wu226ccgn"/><path class="h4kim_4pi"/><path class="yur9gvbnw"/><path class="ogvhkob-h"/><path class="lkafr4bxd wm-s"/></g>`,
		"fallback": "withicons-retro:volume-off",
	});
}

export default Component;
