import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6gw00hkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z6gw00hkt"/>`,
		"fallback": "streamline-logos:mastodon-logo-3-block",
	});
}

export default Component;
