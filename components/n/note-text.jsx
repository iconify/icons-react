import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/b/btx-8mbgv.css';
import '../../css/n/nyqb1nbmr.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="btx-8mbgv"/><path class="nyqb1nbmr"/></g>`,
		"fallback": "marketeq:note-text",
	});
}

export default Component;
