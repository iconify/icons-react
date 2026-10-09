import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bn8v5vbkq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bn8v5vbkq"/>`,
		"fallback": "energy-icons:paperclip-20-bold",
	});
}

export default Component;
