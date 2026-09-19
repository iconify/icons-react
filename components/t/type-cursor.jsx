import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e4on2-bdb.css';
import '../../css/o/oh01f1bic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="e4on2-bdb"/><path class="oh01f1bic"/></g>`,
		"fallback": "hugeicons:type-cursor",
	});
}

export default Component;
