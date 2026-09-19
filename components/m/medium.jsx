import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/l7z6dbf4g.css';
import '../../css/j/jfx8o0b0z.css';
import '../../css/o/oz-lqwbam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="l7z6dbf4g"/><ellipse class="jfx8o0b0z"/><ellipse class="oz-lqwbam"/></g>`,
		"fallback": "hugeicons:medium",
	});
}

export default Component;
