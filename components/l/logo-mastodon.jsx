import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q84d4z_dg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q84d4z_dg"/>`,
		"fallback": "carbon:logo-mastodon",
	});
}

export default Component;
