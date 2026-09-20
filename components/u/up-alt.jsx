import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/n/nxqm3gbik.css';
import '../../css/w/whju3ebol.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="nxqm3gbik"/><path class="whju3ebol"/></g>`,
		"fallback": "marketeq:up-alt",
	});
}

export default Component;
