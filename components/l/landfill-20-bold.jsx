import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g9mh0ybkx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g9mh0ybkx"/>`,
		"fallback": "energy-icons:landfill-20-bold",
	});
}

export default Component;
