import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/af2tmjb7s.css';
import '../../css/d/do8wt1baj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="af2tmjb7s"/><path class="do8wt1baj"/></g>`,
		"fallback": "hugeicons:unfold-more-up",
	});
}

export default Component;
