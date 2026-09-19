import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dzbyv1b6o.css';
import '../../css/f/flm10pbjw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="dzbyv1b6o"/><path class="flm10pbjw"/></g>`,
		"fallback": "glyphs-poly:signal-4",
	});
}

export default Component;
