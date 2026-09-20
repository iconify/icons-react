import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/a/a6qlhwbfo.css';
import '../../css/n/nyqb1nbmr.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="a6qlhwbfo"/><path class="nyqb1nbmr"/></g>`,
		"fallback": "marketeq:note-down",
	});
}

export default Component;
