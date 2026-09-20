import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/ny4460bru.css';
import '../../css/l/ld24yvbps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ny4460bru"/><path class="ld24yvbps"/></g>`,
		"fallback": "tabler:rotate-dot",
	});
}

export default Component;
