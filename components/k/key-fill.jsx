import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kqaeisbkg.css';
import '../../css/e/e61slkbpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kqaeisbkg"/><path class="e61slkbpd"/></g>`,
		"fallback": "keyline-icons:key-fill",
	});
}

export default Component;
