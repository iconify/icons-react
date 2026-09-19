import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kjar8oh2v.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kjar8oh2v"/>`,
		"fallback": "fa6-solid:truck-fast",
	});
}

export default Component;
