import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/ulecmzugy.css';
import '../../css/u/u80ie7bqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ulecmzugy"/><path class="u80ie7bqq"/></g>`,
		"fallback": "hugeicons:phone-developer-mode",
	});
}

export default Component;
