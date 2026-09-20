import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oiw7po6xf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oiw7po6xf"/>`,
		"fallback": "selfhst:telebugs-dark",
	});
}

export default Component;
