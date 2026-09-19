import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/e/ed3f2exdu.css';
import '../../css/y/yd6fzub4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="ed3f2exdu"/><path class="yd6fzub4y"/></g>`,
		"fallback": "bitcoin-icons:message-outline",
	});
}

export default Component;
