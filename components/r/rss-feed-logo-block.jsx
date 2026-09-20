import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ttx7m2byy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ttx7m2byy"/>`,
		"fallback": "streamline-logos:rss-feed-logo-block",
	});
}

export default Component;
