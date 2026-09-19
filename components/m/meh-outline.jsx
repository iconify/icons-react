import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/prmctsbee.css';
import '../../css/l/l4qf8vk5b.css';
import '../../css/u/ubpyrdmuc.css';
import '../../css/p/peejenwcc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="prmctsbee"/><path clip-rule="evenodd" class="l4qf8vk5b"/><path class="ubpyrdmuc"/><path clip-rule="evenodd" class="peejenwcc"/></g>`,
		"fallback": "glyphs:meh-outline",
	});
}

export default Component;
