import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ci7k0p4bs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ci7k0p4bs"/>`,
		"fallback": "fa-solid:skull",
	});
}

export default Component;
