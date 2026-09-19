import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6z9mmb0y.css';

const viewBox = {"width":432,"height":416};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m6z9mmb0y"/>`,
		"fallback": "zmdi:star-half",
	});
}

export default Component;
