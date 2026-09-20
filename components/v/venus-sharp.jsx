import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/srgjyix3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="srgjyix3s"/>`,
		"fallback": "keyline-icons:venus-sharp",
	});
}

export default Component;
