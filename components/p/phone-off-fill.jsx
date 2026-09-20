import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l7m-g-svw.css';
import '../../css/r/rsrhfac5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="l7m-g-svw"/><path class="rsrhfac5n"/></g>`,
		"fallback": "keyline-icons:phone-off-fill",
	});
}

export default Component;
