import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kun_1n6hc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kun_1n6hc"/>`,
		"fallback": "selfhst:plex-light",
	});
}

export default Component;
