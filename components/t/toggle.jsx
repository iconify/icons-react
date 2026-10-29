import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/z/z6-rrdbyr.css';
import '../../css/l/l6yygcc8m.css';
import '../../css/b/bohpowbtw.css';
import '../../css/l/lm-u_327w.css';
import '../../css/y/ybfli14jq.css';
import '../../css/x/x0e9q4bew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="wm-shadow z6-rrdbyr"/><path class="l6yygcc8m"/><path class="bohpowbtw"/><path class="lm-u_327w"/><path class="wm-shine ybfli14jq"/><path class="wm-deco x0e9q4bew"/></g>`,
		"fallback": "withicons-sticker:toggle",
	});
}

export default Component;
