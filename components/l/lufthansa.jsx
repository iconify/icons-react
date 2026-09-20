import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npskko2ei.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="npskko2ei"/>`,
		"fallback": "selfhst:lufthansa",
	});
}

export default Component;
