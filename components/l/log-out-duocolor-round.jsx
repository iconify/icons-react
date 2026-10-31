import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b6i7a1b8w.css';
import '../../css/x/x_inf0h2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="b6i7a1b8w"/><path class="x_inf0h2h"/></g>`,
		"fallback": "coolicons:log-out-duocolor-round",
	});
}

export default Component;
