import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-n2j-byi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-n2j-byi"/>`,
		"fallback": "fa-solid:university",
	});
}

export default Component;
