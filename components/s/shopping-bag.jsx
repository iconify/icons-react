import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j0-l-pb1o.css';
import '../../css/i/i6uv60y3t.css';
import '../../css/z/z20suln-h.css';
import '../../css/u/u0zyu677r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j0-l-pb1o"/><circle class="i6uv60y3t"/><path class="z20suln-h"/><circle class="u0zyu677r"/></g>`,
		"fallback": "icon-park-outline:shopping-bag",
	});
}

export default Component;
