import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vub_5oz5o.css';
import '../../css/n/n2ikcti1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vub_5oz5o"/><path class="n2ikcti1h"/></g>`,
		"fallback": "keyline-icons:mail-check-duotone",
	});
}

export default Component;
