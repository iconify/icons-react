import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e6tif6bqs.css';
import '../../css/r/rj_bktros.css';
import '../../css/d/ddf0atlim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="e6tif6bqs"/><path class="rj_bktros"/><path class="ddf0atlim"/></g>`,
		"fallback": "hugeicons:mail-minus-02",
	});
}

export default Component;
