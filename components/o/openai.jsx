import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bov0584ws.css';
import '../../css/u/u6f-okb0z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bov0584ws"/><path class="u6f-okb0z"/>`,
		"fallback": "selfhst:openai",
	});
}

export default Component;
