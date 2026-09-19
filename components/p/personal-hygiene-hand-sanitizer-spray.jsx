import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/q-bnilbrs.css';
import '../../css/k/ksr677udw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="q-bnilbrs"/><path class="ksr677udw"/></g>`,
		"fallback": "covid:personal-hygiene-hand-sanitizer-spray",
	});
}

export default Component;
