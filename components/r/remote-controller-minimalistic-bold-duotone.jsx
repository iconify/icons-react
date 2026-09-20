import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c37wdnbmk.css';
import '../../css/p/ptysxtpiv.css';
import '../../css/t/tkjj65bgw.css';
import '../../css/u/u75qqq5xn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c37wdnbmk"/><path class="ptysxtpiv"/><path class="tkjj65bgw"/><path clip-rule="evenodd" class="u75qqq5xn"/></g>`,
		"fallback": "solar:remote-controller-minimalistic-bold-duotone",
	});
}

export default Component;
