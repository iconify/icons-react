import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/b/b36zpnb8e.css';
import '../../css/r/rjsa616fr.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="b36zpnb8e"/><path class="rjsa616fr"/></g>`,
		"fallback": "marketeq:up-junction-sign",
	});
}

export default Component;
