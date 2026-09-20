import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wnwp0xbgh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wnwp0xbgh"/>`,
		"fallback": "selfhst:rabbitmq",
	});
}

export default Component;
