import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f1um8mmqv.css';
import '../../css/i/ij5nxhbda.css';
import '../../css/j/jdz_zacic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="f1um8mmqv"/><path class="ij5nxhbda"/><path class="jdz_zacic"/></g>`,
		"fallback": "andrsrxn:vip",
	});
}

export default Component;
