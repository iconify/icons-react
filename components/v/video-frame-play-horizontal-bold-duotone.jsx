import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/leiavflem.css';
import '../../css/q/q8oiapbts.css';
import '../../css/v/vr3d5ybqe.css';
import '../../css/u/ux3d6ub6t.css';
import '../../css/q/q3t7r0b_b.css';
import '../../css/t/tt756abdd.css';
import '../../css/z/z8nu7bc_h.css';
import '../../css/a/a5jwaoo5t.css';
import '../../css/x/x4n556b4y.css';
import '../../css/x/x1hubbctl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="leiavflem"/><path class="q8oiapbts"/><path class="vr3d5ybqe"/><path class="ux3d6ub6t"/><path class="q3t7r0b_b"/><path class="tt756abdd"/><path class="z8nu7bc_h"/><path class="a5jwaoo5t"/><path class="x4n556b4y"/><path class="x1hubbctl"/>`,
		"fallback": "solar:video-frame-play-horizontal-bold-duotone",
	});
}

export default Component;
