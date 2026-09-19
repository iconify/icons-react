import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wh-hi-1jy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wh-hi-1jy"/>`,
		"fallback": "covid:social-distancing-protect-shield-2",
	});
}

export default Component;
