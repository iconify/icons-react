import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f4aw46bgq.css';
import '../../css/s/szj--6b5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="f4aw46bgq"/><path class="szj--6b5k"/></g>`,
		"fallback": "keyline-icons:message-check-two-tone",
	});
}

export default Component;
