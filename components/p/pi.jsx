import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/ievpasblg.css';
import '../../css/j/jruok6bwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ievpasblg"/><path class="jruok6bwt"/></g>`,
		"fallback": "hugeicons:pi",
	});
}

export default Component;
