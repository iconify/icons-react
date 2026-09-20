import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/phs4gib1x.css';
import '../../css/x/xulon8bmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="phs4gib1x"/><path class="xulon8bmf"/></g>`,
		"fallback": "tabler:shopping-bag-x",
	});
}

export default Component;
