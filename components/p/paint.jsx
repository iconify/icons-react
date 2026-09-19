import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/d/df14or4ow.css';
import '../../css/y/ynv9gxbsk.css';
import '../../css/p/p3k5-achu.css';
import '../../css/p/p8yjlkb-s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="df14or4ow"/><path class="ynv9gxbsk"/><path class="p3k5-achu"/><path class="p8yjlkb-s"/></g>`,
		"fallback": "icon-park:paint",
	});
}

export default Component;
