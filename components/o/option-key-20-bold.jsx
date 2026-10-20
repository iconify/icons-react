import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uz7wkfxio.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uz7wkfxio"/>`,
		"fallback": "energy-icons:option-key-20-bold",
	});
}

export default Component;
