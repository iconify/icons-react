import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f4aw46bgq.css';
import '../../css/d/d7d8yhj8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="f4aw46bgq"/><path class="d7d8yhj8i"/></g>`,
		"fallback": "keyline-icons:message-lines-two-tone",
	});
}

export default Component;
