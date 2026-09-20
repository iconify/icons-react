import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9d6xob5n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m9d6xob5n"/>`,
		"fallback": "zondicons:key",
	});
}

export default Component;
