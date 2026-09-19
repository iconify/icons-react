import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ymq0d1b4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ymq0d1b4o"/>`,
		"fallback": "fontisto:rss",
	});
}

export default Component;
