import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/roh82d3sm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="roh82d3sm"/>`,
		"fallback": "selfhst:spotizerr-dark",
	});
}

export default Component;
