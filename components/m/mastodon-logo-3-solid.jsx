import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lb5d0xh1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lb5d0xh1n"/>`,
		"fallback": "streamline-logos:mastodon-logo-3-solid",
	});
}

export default Component;
