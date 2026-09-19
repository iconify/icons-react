import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d4ro-ulqy.css';
import '../../css/t/tslmd9x7n.css';
import '../../css/v/vpewet_6e.css';
import '../../css/l/lo63h3i1j.css';
import '../../css/f/f_-agibhk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d4ro-ulqy"/><path clip-rule="evenodd" class="tslmd9x7n"/><path class="vpewet_6e"/><path clip-rule="evenodd" class="lo63h3i1j"/><path class="f_-agibhk"/></g>`,
		"fallback": "glyphs:pencil-1-outline",
	});
}

export default Component;
