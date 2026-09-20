import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/skx0vxbji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="skx0vxbji"/>`,
		"fallback": "mdi:rss-off",
	});
}

export default Component;
