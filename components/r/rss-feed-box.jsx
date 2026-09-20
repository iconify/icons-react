import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3d7mnbqu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l3d7mnbqu"/>`,
		"fallback": "mdi:rss-feed-box",
	});
}

export default Component;
