import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o_4lxy4yt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o_4lxy4yt"/>`,
		"fallback": "akar-icons:mastodon-fill",
	});
}

export default Component;
