import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlb6a3l8z.css';
import '../../css/i/ih3ngibul.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/d/db3zqophh.css';
import '../../css/k/krg836bnm.css';
import '../../css/u/uv-9pkbwn.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlb6a3l8z"/><path class="ih3ngibul"/><g class="jn8qy4bru"><path class="db3zqophh"/><path class="krg836bnm"/><path class="uv-9pkbwn"/></g>`,
		"fallback": "openmoji:llama",
	});
}

export default Component;
