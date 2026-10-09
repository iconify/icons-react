import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yq6qzmbna.css';
import '../../css/r/r0r74pb_v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yq6qzmbna"/><path class="r0r74pb_v"/>`,
		"fallback": "energy-icons:ticket-20-bold",
	});
}

export default Component;
