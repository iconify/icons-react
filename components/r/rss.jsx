import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mo-l4qbgg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mo-l4qbgg"/>`,
		"fallback": "entypo:rss",
	});
}

export default Component;
