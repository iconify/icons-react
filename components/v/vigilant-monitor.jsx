import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2z5tnbau.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2z5tnbau"/>`,
		"fallback": "selfhst:vigilant-monitor",
	});
}

export default Component;
