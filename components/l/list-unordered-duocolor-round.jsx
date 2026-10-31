import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x8sqkdfzp.css';
import '../../css/l/l0ibohb7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="x8sqkdfzp"/><path class="l0ibohb7c"/></g>`,
		"fallback": "coolicons:list-unordered-duocolor-round",
	});
}

export default Component;
