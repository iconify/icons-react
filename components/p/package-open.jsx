import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/i/ipc8hgbqh.css';
import '../../css/p/pe9nnvb5b.css';
import '../../css/v/v0z4t4bqo.css';
import '../../css/z/zvkpjdbrb.css';
import '../../css/y/y3fzlupkr.css';
import '../../css/u/uvlxbpwvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="ipc8hgbqh wm-shadow"/><path class="pe9nnvb5b"/><path class="v0z4t4bqo"/><path class="zvkpjdbrb"/><path class="wm-shine y3fzlupkr"/><path class="uvlxbpwvl wm-deco"/></g>`,
		"fallback": "withicons-sticker:package-open",
	});
}

export default Component;
