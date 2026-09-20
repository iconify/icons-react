import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pansh_bqv.css';
import '../../css/k/k7wymaclk.css';
import '../../css/j/jwsgkxbib.css';
import '../../css/s/sitkwvw3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pansh_bqv"/><path class="k7wymaclk"/><path class="jwsgkxbib"/><path clip-rule="evenodd" class="sitkwvw3v"/></g>`,
		"fallback": "reicon:mailbox-duotone",
	});
}

export default Component;
