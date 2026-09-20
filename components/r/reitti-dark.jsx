import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fox-zjbbr.css';
import '../../css/t/tc50lygvv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fox-zjbbr"/><path class="tc50lygvv"/>`,
		"fallback": "selfhst:reitti-dark",
	});
}

export default Component;
