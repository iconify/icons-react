import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eckbafr_s.css';
import '../../css/n/npowmohlh.css';
import '../../css/b/b-20_gbed.css';
import '../../css/g/g8wvjxrez.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="eckbafr_s"/><path class="npowmohlh"/><path class="b-20_gbed"/><path class="g8wvjxrez"/></g>`,
		"fallback": "fluent-emoji-high-contrast:person-wrestling",
	});
}

export default Component;
