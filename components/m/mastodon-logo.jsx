import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z8n-h5bnb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z8n-h5bnb"/>`,
		"fallback": "ix:mastodon-logo",
	});
}

export default Component;
