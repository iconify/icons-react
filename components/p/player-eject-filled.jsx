import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yf20vue0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yf20vue0q"/>`,
		"fallback": "tabler:player-eject-filled",
	});
}

export default Component;
