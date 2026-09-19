import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tj-p18bnk.css';
import '../../css/f/fu7jtmb-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="tj-p18bnk"/><path class="fu7jtmb-b"/></g>`,
		"fallback": "hugeicons:tap-04",
	});
}

export default Component;
