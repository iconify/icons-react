import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/psii9s-rc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="psii9s-rc"/>`,
		"fallback": "selfhst:valetudo-dark",
	});
}

export default Component;
