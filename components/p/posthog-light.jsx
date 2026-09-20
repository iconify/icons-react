import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5gqbfv1n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5gqbfv1n"/>`,
		"fallback": "selfhst:posthog-light",
	});
}

export default Component;
