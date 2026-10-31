import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b8zzi9b9i.css';
import '../../css/r/rwlw5rbrz.css';
import '../../css/l/l5ajeghbw.css';
import '../../css/n/nb1n9zbjd.css';
import '../../css/z/ziju64h3m.css';
import '../../css/x/x18h2pbzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="b8zzi9b9i wm-shadow"/><path class="rwlw5rbrz"/><path class="l5ajeghbw"/><path class="nb1n9zbjd"/><path class="ziju64h3m"/><path class="x18h2pbzh"/></g>`,
		"fallback": "withicons-retro:water-balloon",
	});
}

export default Component;
