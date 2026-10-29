import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/t/t0sae48qw.css';
import '../../css/d/dpjo41b4m.css';
import '../../css/v/v_g7r_1us.css';
import '../../css/j/j0nlsrb2g.css';
import '../../css/o/ogolnsb4l.css';
import '../../css/j/jiyslx5wq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="t0sae48qw wm-deco"/><path class="dpjo41b4m wm-deco"/><path class="v_g7r_1us wm-deco"/><path class="j0nlsrb2g wm-k"/><path class="ogolnsb4l wm-a"/><path class="jiyslx5wq wm-k"/></g>`,
		"fallback": "withicons:shopping-cart-blueprint",
	});
}

export default Component;
