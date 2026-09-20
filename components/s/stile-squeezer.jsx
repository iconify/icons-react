import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yaszo0-_k.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yaszo0-_k"/>`,
		"fallback": "temaki:stile-squeezer",
	});
}

export default Component;
