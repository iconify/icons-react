import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/y/yngcailry.css';
import '../../css/t/tv-5nyb5r.css';
import '../../css/a/ab8bavvap.css';
import '../../css/f/fiarxjb9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="yngcailry"/><path class="tv-5nyb5r wm-shine"/><path class="ab8bavvap wm-k"/><path class="fiarxjb9d wm-a"/></g>`,
		"fallback": "withicons-kawaii:message-square-plus",
	});
}

export default Component;
