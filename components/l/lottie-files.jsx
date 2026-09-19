import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tw7ii9h6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tw7ii9h6q"/>`,
		"fallback": "bxl:lottie-files",
	});
}

export default Component;
