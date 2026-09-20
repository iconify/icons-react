import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/i/ihb8w3bfe.css';
import '../../css/g/gigna1b6i.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="ihb8w3bfe"/><path class="gigna1b6i"/></g>`,
		"fallback": "marketeq:turn-left-sign",
	});
}

export default Component;
