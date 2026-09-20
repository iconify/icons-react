import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/itr0olbhq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="itr0olbhq"/>`,
		"fallback": "mage:notification-bell-cross-fill",
	});
}

export default Component;
