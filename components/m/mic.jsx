import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2pe4vpat.css';

const viewBox = {"width":352,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k2pe4vpat"/>`,
		"fallback": "ps:mic",
	});
}

export default Component;
