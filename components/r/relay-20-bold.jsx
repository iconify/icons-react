import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdx1pbuzq.css';
import '../../css/d/dzwhzcc4a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cdx1pbuzq"/><path class="dzwhzcc4a"/>`,
		"fallback": "energy-icons:relay-20-bold",
	});
}

export default Component;
