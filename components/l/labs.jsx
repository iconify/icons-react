import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/nu7yhz69s.css';
import '../../css/u/u_3sxfbdf.css';
import '../../css/i/icc58_d8i.css';
import '../../css/e/e2j9ewbwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="nu7yhz69s"/><path class="u_3sxfbdf"/><path class="icc58_d8i"/><path class="e2j9ewbwj"/></g>`,
		"fallback": "hugeicons:labs",
	});
}

export default Component;
