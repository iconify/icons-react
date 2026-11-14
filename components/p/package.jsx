import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ia4u8nycc.css';
import '../../css/w/w3gy50i7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ia4u8nycc"/><path class="w3gy50i7o"/></g>`,
		"fallback": "struq:package",
	});
}

export default Component;
