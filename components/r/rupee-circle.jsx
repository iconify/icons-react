import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rrw1dqb8f.css';
import '../../css/g/g0fncz2rx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rrw1dqb8f"/><path class="g0fncz2rx"/></g>`,
		"fallback": "hugeicons:rupee-circle",
	});
}

export default Component;
