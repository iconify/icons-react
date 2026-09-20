import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/thhjwpypo.css';
import '../../css/c/chylecb1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="thhjwpypo"/><path class="chylecb1o"/></g>`,
		"fallback": "keyline-icons:loader-two-tone",
	});
}

export default Component;
