import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5-9u1vgp.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m5-9u1vgp"/>`,
		"fallback": "fa7-solid:scale-balanced",
	});
}

export default Component;
