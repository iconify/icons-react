import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e8t_k5p9z.css';
import '../../css/u/uysy1bbiz.css';
import '../../css/o/omkqhvn3l.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e8t_k5p9z"/><path class="uysy1bbiz"/><path class="omkqhvn3l"/></g>`,
		"fallback": "glyphs:note-clipboard-duo",
	});
}

export default Component;
