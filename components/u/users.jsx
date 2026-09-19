import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bguf4zbjw.css';
import '../../css/p/ph8fhtbjr.css';
import '../../css/r/r2vfrlbwl.css';
import '../../css/p/pn5h7rz2h.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="bguf4zbjw"/><path class="ph8fhtbjr"/><path class="r2vfrlbwl"/><path class="pn5h7rz2h"/></g>`,
		"fallback": "glyphs-poly:users",
	});
}

export default Component;
