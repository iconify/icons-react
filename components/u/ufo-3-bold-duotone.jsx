import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ykrwmds6i.css';
import '../../css/y/ybkspvqfr.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/e/e_i_n_loy.css';
import '../../css/j/jf1-5zbft.css';
import '../../css/i/ii6geh1dw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ykrwmds6i"/><path class="ybkspvqfr"/><g class="mc2zb0bvp"><path class="e_i_n_loy"/><path class="jf1-5zbft"/><path class="ii6geh1dw"/></g></g>`,
		"fallback": "solar:ufo-3-bold-duotone",
	});
}

export default Component;
