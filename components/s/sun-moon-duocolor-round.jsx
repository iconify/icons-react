import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wh05cbb3m.css';
import '../../css/s/slaixwgbi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wh05cbb3m"/><path class="slaixwgbi"/></g>`,
		"fallback": "coolicons:sun-moon-duocolor-round",
	});
}

export default Component;
