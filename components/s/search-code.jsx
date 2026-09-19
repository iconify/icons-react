import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/muj0hvwdt.css';
import '../../css/u/u25lbyi3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="muj0hvwdt"/><path class="u25lbyi3x"/></g>`,
		"fallback": "hugeicons:search-code",
	});
}

export default Component;
