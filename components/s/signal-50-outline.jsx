import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rpkr9m80i.css';
import '../../css/e/e-tq5jl-s.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="rpkr9m80i"/><path class="e-tq5jl-s"/></g>`,
		"fallback": "glyphs:signal-50-outline",
	});
}

export default Component;
