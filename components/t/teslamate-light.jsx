import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/let3-10tw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="let3-10tw"/>`,
		"fallback": "selfhst:teslamate-light",
	});
}

export default Component;
