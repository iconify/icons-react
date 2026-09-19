import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lzdbpcvon.css';
import '../../css/h/h-3n_ogbi.css';
import '../../css/j/jyfcc9bld.css';
import '../../css/v/vprcj457p.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lzdbpcvon"/><path class="h-3n_ogbi"/><path class="jyfcc9bld"/><path class="vprcj457p"/></g>`,
		"fallback": "glyphs:paste-duo",
	});
}

export default Component;
