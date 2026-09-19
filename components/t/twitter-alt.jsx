import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hr92bcb3d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hr92bcb3d"/>`,
		"fallback": "dashicons:twitter-alt",
	});
}

export default Component;
