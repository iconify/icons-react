import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rg7_ebbre.css';
import '../../css/u/u66c0vbaa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rg7_ebbre"/><path class="u66c0vbaa"/></g>`,
		"fallback": "hugeicons:toilet-01",
	});
}

export default Component;
