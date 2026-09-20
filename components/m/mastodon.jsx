import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/d/d6imlv.css';
import '../../css/v/vx_7fa.css';
import '../../css/s/so-from-82.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c d6imlv"/><path class="a0m25c vx_7fa"/>`,
		"fallback": "line-md:mastodon",
	});
}

export default Component;
