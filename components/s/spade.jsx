import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nie4ck4jr.css';
import '../../css/c/ccws5rb3a.css';
import '../../css/n/n2ea0o7ot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nie4ck4jr"/><path class="ccws5rb3a"/><path class="n2ea0o7ot"/></g>`,
		"fallback": "vadivam:spade",
	});
}

export default Component;
