import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/feogx6j2n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="feogx6j2n"/>`,
		"fallback": "selfhst:torsher-dark",
	});
}

export default Component;
