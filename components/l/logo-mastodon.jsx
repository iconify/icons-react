import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yew2c0sjo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yew2c0sjo"/>`,
		"fallback": "ion:logo-mastodon",
	});
}

export default Component;
