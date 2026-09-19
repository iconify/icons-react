import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/g1te_5jwk.css';
import '../../css/e/ey8poua1c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="g1te_5jwk"/><path class="ey8poua1c"/></g>`,
		"fallback": "fluent-emoji-flat:performing-arts",
	});
}

export default Component;
