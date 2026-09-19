import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q1m15dbht.css';
import '../../css/b/be1f8ebhq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="q1m15dbht"/><path class="be1f8ebhq"/></g>`,
		"fallback": "feather:sun",
	});
}

export default Component;
