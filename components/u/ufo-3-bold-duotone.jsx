import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfhmdebaa.css';
import '../../css/o/ofixa7bdo.css';
import '../../css/x/xtpeb-edw.css';
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
		"content": `<path clip-rule="evenodd" class="qfhmdebaa"/><path class="ofixa7bdo"/><g class="xtpeb-edw"><path class="e_i_n_loy"/><path class="jf1-5zbft"/><path class="ii6geh1dw"/></g>`,
		"fallback": "solar:ufo-3-bold-duotone",
	});
}

export default Component;
