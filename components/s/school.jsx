import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uj_wscbdo.css';
import '../../css/p/pp_w15bey.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uj_wscbdo"/><path class="pp_w15bey"/></g>`,
		"fallback": "fluent-emoji-high-contrast:school",
	});
}

export default Component;
