import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bk3jx7dit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bk3jx7dit"/>`,
		"fallback": "mingcute:mastodon-fill",
	});
}

export default Component;
