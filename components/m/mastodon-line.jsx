import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svq151qyv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="svq151qyv"/>`,
		"fallback": "mingcute:mastodon-line",
	});
}

export default Component;
