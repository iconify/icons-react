import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/libtowqnn.css';
import '../../css/k/k_baq7y9r.css';
import '../../css/e/e2gmqcccl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="libtowqnn"/><path class="k_baq7y9r"/><path clip-rule="evenodd" class="e2gmqcccl"/></g>`,
		"fallback": "glyphs-poly:tv-retro",
	});
}

export default Component;
