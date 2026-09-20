import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aq2lc6yth.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aq2lc6yth"/>`,
		"fallback": "selfhst:iobroker-light",
	});
}

export default Component;
