import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/g1y845b1h.css';
import '../../css/j/j-791ibyn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="g1y845b1h"/><path class="j-791ibyn"/></g>`,
		"fallback": "hugeicons:repeat-one-01",
	});
}

export default Component;
