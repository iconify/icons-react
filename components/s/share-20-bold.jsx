import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p9rholkuw.css';
import '../../css/z/zr6v3gbry.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p9rholkuw"/><path class="zr6v3gbry"/>`,
		"fallback": "energy-icons:share-20-bold",
	});
}

export default Component;
