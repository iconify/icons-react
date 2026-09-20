import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q36h1kl5c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q36h1kl5c"/>`,
		"fallback": "selfhst:peer-calls-dark",
	});
}

export default Component;
