import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lw-hs9b8z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lw-hs9b8z"/>`,
		"fallback": "selfhst:owncast-dark",
	});
}

export default Component;
