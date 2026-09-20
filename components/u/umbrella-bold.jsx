import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hxu_bbcsk.css';
import '../../css/g/g4o-ggzfa.css';
import '../../css/w/w2-buabqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hxu_bbcsk"/><path class="g4o-ggzfa"/><path class="w2-buabqj"/></g>`,
		"fallback": "solar:umbrella-bold",
	});
}

export default Component;
