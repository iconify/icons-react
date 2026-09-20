import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dr_totf1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dr_totf1v"/>`,
		"fallback": "pixel:mastodon",
	});
}

export default Component;
