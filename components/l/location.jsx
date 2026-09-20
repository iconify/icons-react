import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/annzx-b6z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="annzx-b6z"/>`,
		"fallback": "zondicons:location",
	});
}

export default Component;
