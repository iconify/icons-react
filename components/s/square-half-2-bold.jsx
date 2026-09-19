import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zaznb6ikb.css';
import '../../css/a/a3dvf63xo.css';
import '../../css/j/j60knyzzp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="zaznb6ikb"/><path class="a3dvf63xo"/><path class="j60knyzzp"/></g>`,
		"fallback": "glyphs:square-half-2-bold",
	});
}

export default Component;
