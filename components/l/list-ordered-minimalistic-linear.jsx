import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l7y12ieah.css';
import '../../css/v/v8tx6ieir.css';
import '../../css/a/a-d731ccj.css';
import '../../css/i/iw9omoj8x.css';
import '../../css/j/j6st1829s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="l7y12ieah"/><path class="v8tx6ieir"/><path class="a-d731ccj"/><path class="iw9omoj8x"/><path class="j6st1829s"/></g>`,
		"fallback": "solar:list-ordered-minimalistic-linear",
	});
}

export default Component;
