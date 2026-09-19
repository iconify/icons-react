import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h_cp8gbnb.css';
import '../../css/t/t-7xstbgc.css';
import '../../css/t/tmav-mb2k.css';
import '../../css/i/imukq7b6n.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h_cp8gbnb"/><path clip-rule="evenodd" class="t-7xstbgc"/><path class="tmav-mb2k"/><path clip-rule="evenodd" class="imukq7b6n"/></g>`,
		"fallback": "glyphs:sd-card-1-outline",
	});
}

export default Component;
