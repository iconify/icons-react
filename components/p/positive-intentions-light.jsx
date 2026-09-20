import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ltfp6vbpq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ltfp6vbpq"/>`,
		"fallback": "selfhst:positive-intentions-light",
	});
}

export default Component;
