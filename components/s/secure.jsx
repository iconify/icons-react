import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/u/ufcrp1bff.css';
import '../../css/f/f0eh9eb9z.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="ufcrp1bff"/><path class="f0eh9eb9z"/></g>`,
		"fallback": "marketeq:secure",
	});
}

export default Component;
