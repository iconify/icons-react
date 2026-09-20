import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kt0unvn3l.css';
import '../../css/c/co_6nib_w.css';
import '../../css/p/ppcbm4bhz.css';
import '../../css/m/mi9zrjb8e.css';
import '../../css/t/t1dkbtbrd.css';
import '../../css/e/ey70n1bag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kt0unvn3l"/><path class="co_6nib_w"/><path class="ppcbm4bhz"/><path class="mi9zrjb8e"/><path class="t1dkbtbrd"/><path class="ey70n1bag"/></g>`,
		"fallback": "streamline-cyber-color:warehouse-2",
	});
}

export default Component;
