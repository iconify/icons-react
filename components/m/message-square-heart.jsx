import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bub8fgbgp.css';
import '../../css/n/n0isb1xps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bub8fgbgp"/><path class="n0isb1xps"/></g>`,
		"fallback": "vadivam:message-square-heart",
	});
}

export default Component;
