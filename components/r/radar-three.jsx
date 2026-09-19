import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/j/jjtab5g6w.css';
import '../../css/t/tv-vqab4x.css';
import '../../css/g/g4-f7hwxf.css';
import '../../css/t/tqb_6nb6c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="jjtab5g6w"/><path class="tv-vqab4x"/><path class="g4-f7hwxf"/><circle class="tqb_6nb6c"/></g>`,
		"fallback": "icon-park-outline:radar-three",
	});
}

export default Component;
