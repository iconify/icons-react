import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pe9nqr8no.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pe9nqr8no"/>`,
		"fallback": "coolicons:shield-sparkle-fill-round",
	});
}

export default Component;
