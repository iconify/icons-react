import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q07717bxa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q07717bxa"/>`,
		"fallback": "selfhst:tugtainer-dark",
	});
}

export default Component;
