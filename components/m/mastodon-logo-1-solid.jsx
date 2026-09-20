import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3ztu-p5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y3ztu-p5p"/>`,
		"fallback": "streamline-logos:mastodon-logo-1-solid",
	});
}

export default Component;
