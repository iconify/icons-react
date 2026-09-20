import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dp3ta-1pq.css';
import '../../css/g/gfpj9w7rf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dp3ta-1pq"/><path class="gfpj9w7rf"/>`,
		"fallback": "streamline-ultimate:like-chat-bold",
	});
}

export default Component;
