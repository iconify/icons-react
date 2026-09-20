import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/q/q5wt2mb5e.css';
import '../../css/d/d-s4evbkp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="q5wt2mb5e"/><path class="d-s4evbkp"/></g>`,
		"fallback": "streamline-sharp-color:link-share-2",
	});
}

export default Component;
