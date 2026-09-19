import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7n3pkxoe.css';
import '../../css/y/yy8wd3b-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7n3pkxoe"/><path class="yy8wd3b-a"/>`,
		"fallback": "boxicons:rss-filled",
	});
}

export default Component;
