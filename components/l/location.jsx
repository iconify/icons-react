import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3ma3cbjo.css';

const viewBox = {"width":690,"height":820};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3ma3cbjo"/>`,
		"fallback": "il:location",
	});
}

export default Component;
