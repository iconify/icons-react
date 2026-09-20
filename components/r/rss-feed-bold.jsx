import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dsq76_m7h.css';
import '../../css/g/ge4x6hrjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dsq76_m7h"/><path class="ge4x6hrjx"/>`,
		"fallback": "streamline-ultimate:rss-feed-bold",
	});
}

export default Component;
