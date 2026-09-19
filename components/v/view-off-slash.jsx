import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gh-4n77zw.css';
import '../../css/q/q216lkbrx.css';
import '../../css/e/efkc1gbdu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="gh-4n77zw"/><path class="q216lkbrx"/><path class="efkc1gbdu"/></g>`,
		"fallback": "hugeicons:view-off-slash",
	});
}

export default Component;
