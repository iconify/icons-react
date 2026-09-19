import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qo1ff3bvj.css';
import '../../css/g/g8wdyqb3r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qo1ff3bvj"/><path class="g8wdyqb3r"/></g>`,
		"fallback": "hugeicons:shrink-dot",
	});
}

export default Component;
