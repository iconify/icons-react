import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zu82nqowe.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zu82nqowe"/>`,
		"fallback": "energy-icons:rare-earth-20-bold",
	});
}

export default Component;
