import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bnsivobku.css';
import '../../css/i/iiq6_l6ux.css';
import '../../css/k/kmlggrbtv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="bnsivobku"/><path class="iiq6_l6ux"/><path class="kmlggrbtv"/></g>`,
		"fallback": "andrsrxn:square-cursor",
	});
}

export default Component;
