import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7w6zoe8j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7w6zoe8j"/>`,
		"fallback": "zondicons:watch",
	});
}

export default Component;
