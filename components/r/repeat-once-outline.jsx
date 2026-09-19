import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b8o27mgml.css';
import '../../css/o/of-k99bvu.css';
import '../../css/m/mzbt9lmsw.css';
import '../../css/n/nf6pszb-h.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="b8o27mgml"/><path class="of-k99bvu"/><path clip-rule="evenodd" class="mzbt9lmsw"/><path class="nf6pszb-h"/></g>`,
		"fallback": "glyphs:repeat-once-outline",
	});
}

export default Component;
