import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oq5kuzvqv.css';
import '../../css/b/bnmmfbcbk.css';
import '../../css/l/la4vabcox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="oq5kuzvqv"/><circle transform="rotate(90 12 12)" class="bnmmfbcbk"/><path class="la4vabcox"/></g>`,
		"fallback": "andrsrxn:locate-line",
	});
}

export default Component;
