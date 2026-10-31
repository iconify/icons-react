import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/inja6ob5h.css';
import '../../css/b/bc4gh5bbk.css';
import '../../css/z/z-h3f765i.css';
import '../../css/f/f61bxactw.css';

const viewBox = {"width":301,"height":151};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="inja6ob5h"/><path class="bc4gh5bbk"/><path class="z-h3f765i"/><path class="f61bxactw"/></g>`,
		"fallback": "cif:kw",
	});
}

export default Component;
