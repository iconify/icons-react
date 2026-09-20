import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/icv505sfb.css';
import '../../css/l/la6a33g4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="icv505sfb"/><path class="la6a33g4t"/></g>`,
		"fallback": "solar:lightbulb-bolt-outline",
	});
}

export default Component;
