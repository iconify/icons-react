import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/ldi9lbb3u.css';
import '../../css/d/d93exubkv.css';
import '../../css/d/da_pl4pve.css';
import '../../css/j/jhxws-09i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ldi9lbb3u"/><path class="d93exubkv"/><path class="da_pl4pve"/><path class="jhxws-09i"/></g>`,
		"fallback": "solar:suitcase-tag-bold",
	});
}

export default Component;
