import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/r/r1aq4v0kw.css';
import '../../css/b/b6mlsub7h.css';
import '../../css/o/o16saib_v.css';
import '../../css/t/tbqevac0d.css';
import '../../css/l/lk17kwthj.css';
import '../../css/d/dt183mbmv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="r1aq4v0kw wm-shadow"/><path class="b6mlsub7h"/><path class="o16saib_v"/><path class="tbqevac0d"/><path class="lk17kwthj wm-shine"/><path class="dt183mbmv wm-deco"/></g>`,
		"fallback": "withicons-sticker:square-dashed",
	});
}

export default Component;
