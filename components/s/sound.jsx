import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w419zrd7k.css';
import '../../css/d/d0tzxtbaw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="w419zrd7k"/><path class="d0tzxtbaw"/></g>`,
		"fallback": "struq:sound",
	});
}

export default Component;
