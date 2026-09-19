import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mde00om6t.css';
import '../../css/u/u6vfxdbpj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mde00om6t"/><path class="u6vfxdbpj"/></g>`,
		"fallback": "hugeicons:left-triangle",
	});
}

export default Component;
