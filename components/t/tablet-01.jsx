import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/z44gsfv9u.css';
import '../../css/s/s87g7yb0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="z44gsfv9u"/><path class="s87g7yb0m"/></g>`,
		"fallback": "hugeicons:tablet-01",
	});
}

export default Component;
