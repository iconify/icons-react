import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bq78mbbgi.css';
import '../../css/q/q_dx2-hlg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="bq78mbbgi"/><path class="q_dx2-hlg"/></g>`,
		"fallback": "glyphs-poly:sleet",
	});
}

export default Component;
