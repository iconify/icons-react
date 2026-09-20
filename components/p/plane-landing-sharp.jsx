import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wv5m0ubjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wv5m0ubjv"/>`,
		"fallback": "keyline-icons:plane-landing-sharp",
	});
}

export default Component;
