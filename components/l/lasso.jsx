import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/h/hdki-_bpi.css';
import '../../css/k/k56gh1yvu.css';
import '../../css/j/jsabrtiqq.css';
import '../../css/i/i1g1qkwrt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="hdki-_bpi"/><path class="k56gh1yvu wm-k"/><path class="jsabrtiqq wm-a"/><path class="i1g1qkwrt wm-deco"/></g>`,
		"fallback": "withicons-kawaii:lasso",
	});
}

export default Component;
