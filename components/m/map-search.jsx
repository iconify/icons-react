import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw0nw1sey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw0nw1sey"/>`,
		"fallback": "tabler:map-search",
	});
}

export default Component;
