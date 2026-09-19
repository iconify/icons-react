import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oebqn73qp.css';
import '../../css/t/t9rxa-ibr.css';
import '../../css/n/n1w29k_3i.css';
import '../../css/m/m0ew45bnl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oebqn73qp"/><path class="t9rxa-ibr"/><path class="n1w29k_3i"/><path class="m0ew45bnl"/></g>`,
		"fallback": "fluent-emoji-high-contrast:person-getting-haircut",
	});
}

export default Component;
