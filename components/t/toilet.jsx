import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/silqywcvh.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="silqywcvh"/>`,
		"fallback": "fa-solid:toilet",
	});
}

export default Component;
