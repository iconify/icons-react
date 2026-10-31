import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bgx-1gt4g.css';
import '../../css/n/n0mf0v_wi.css';
import '../../css/x/x1hpb9pnm.css';
import '../../css/m/mp_zb3ocs.css';
import '../../css/h/hq_c9ubcp.css';
import '../../css/o/o1fgh1bya.css';
import '../../css/u/uhsvoxboo.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bgx-1gt4g"/><path clip-rule="evenodd" class="n0mf0v_wi"/><path class="x1hpb9pnm"/><path clip-rule="evenodd" class="mp_zb3ocs"/><path class="hq_c9ubcp"/><path clip-rule="evenodd" class="o1fgh1bya"/><path clip-rule="evenodd" class="uhsvoxboo"/>`,
		"fallback": "streamline-memes:joker-face-hand-drawn",
	});
}

export default Component;
