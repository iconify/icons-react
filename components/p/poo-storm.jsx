import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr59wcg0k.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pr59wcg0k"/>`,
		"fallback": "fa6-solid:poo-storm",
	});
}

export default Component;
