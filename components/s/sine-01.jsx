import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zcahlbb8m.css';
import '../../css/x/x1bbvpbuw.css';
import '../../css/a/a-9na3bne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zcahlbb8m"/><path class="x1bbvpbuw"/><path class="a-9na3bne"/></g>`,
		"fallback": "hugeicons:sine-01",
	});
}

export default Component;
