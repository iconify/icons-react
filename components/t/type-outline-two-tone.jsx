import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hgcm0ub4q.css';
import '../../css/f/ffn14m8tb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hgcm0ub4q"/><path class="ffn14m8tb"/></g>`,
		"fallback": "keyline-icons:type-outline-two-tone",
	});
}

export default Component;
