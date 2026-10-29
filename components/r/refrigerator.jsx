import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/q/qi_53e5zc.css';
import '../../css/k/k-gnfab9e.css';
import '../../css/n/n8yxkpwol.css';
import '../../css/z/zql8x57fw.css';
import '../../css/h/h3l30mb_j.css';
import '../../css/a/aexe23bqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="qi_53e5zc wm-shadow"/><path class="k-gnfab9e"/><path class="n8yxkpwol"/><path class="zql8x57fw"/><path class="h3l30mb_j wm-shine"/><path class="aexe23bqk wm-deco"/></g>`,
		"fallback": "withicons-sticker:refrigerator",
	});
}

export default Component;
