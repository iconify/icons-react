import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/a/ascaj5a6r.css';
import '../../css/n/nyqb1nbmr.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="ascaj5a6r"/><path class="nyqb1nbmr"/></g>`,
		"fallback": "marketeq:note-alt",
	});
}

export default Component;
