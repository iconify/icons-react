import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/n/na7t21bzw.css';
import '../../css/f/f6tewlb-e.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="na7t21bzw"/><path class="f6tewlb-e"/></g>`,
		"fallback": "marketeq:upload-5",
	});
}

export default Component;
