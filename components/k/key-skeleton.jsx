import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wvcxi1j2o.css';
import '../../css/i/ipf6v-78h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wvcxi1j2o"/><circle class="ipf6v-78h"/></g>`,
		"fallback": "meteor-icons:key-skeleton",
	});
}

export default Component;
