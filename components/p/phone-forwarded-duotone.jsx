import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n802joiny.css';
import '../../css/w/w74z78bpv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="n802joiny"/><path class="w74z78bpv"/></g>`,
		"fallback": "keyline-icons:phone-forwarded-duotone",
	});
}

export default Component;
