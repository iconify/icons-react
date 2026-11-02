import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tw7ll75ab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tw7ll75ab"/>`,
		"fallback": "mingcute:netease-music-fill",
	});
}

export default Component;
