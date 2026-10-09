import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jocetjbkv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jocetjbkv"/>`,
		"fallback": "energy-icons:semicircle-20-bold",
	});
}

export default Component;
