import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/npjxebmka.css';
import '../../css/t/trmte6b8g.css';
import '../../css/j/jrob5sf-a.css';
import '../../css/g/goxh5gplb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="npjxebmka wm-shadow"/><path class="trmte6b8g"/><path class="jrob5sf-a wm-s"/><path class="goxh5gplb"/></g>`,
		"fallback": "withicons-retro:sparkler",
	});
}

export default Component;
