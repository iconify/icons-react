import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lah38-bzw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lah38-bzw"/>`,
		"fallback": "selfhst:kopia",
	});
}

export default Component;
