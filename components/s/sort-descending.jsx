import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/c/cf-tt3b8f.css';
import '../../css/s/s44bi0bgr.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="cf-tt3b8f"/><path class="s44bi0bgr"/></g>`,
		"fallback": "marketeq:sort-descending",
	});
}

export default Component;
