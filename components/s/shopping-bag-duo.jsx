import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j04u3tgqr.css';
import '../../css/f/f9u57ym5z.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j04u3tgqr"/><path class="f9u57ym5z"/></g>`,
		"fallback": "glyphs:shopping-bag-duo",
	});
}

export default Component;
