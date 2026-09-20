import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/f/f-4zd1bop.css';
import '../../css/m/mtgm9_51k.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="f-4zd1bop"/><path class="mtgm9_51k"/></g>`,
		"fallback": "marketeq:turn-around-left-top-direction-2",
	});
}

export default Component;
