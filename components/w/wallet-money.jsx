import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/g/g4x10rber.css';
import '../../css/w/wzh204bze.css';
import '../../css/u/u3ijsnwem.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="g4x10rber"/><path class="wzh204bze"/><path class="u3ijsnwem"/></g>`,
		"fallback": "marketeq:wallet-money",
	});
}

export default Component;
