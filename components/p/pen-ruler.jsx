import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5i22bb9x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r5i22bb9x"/>`,
		"fallback": "fa6-solid:pen-ruler",
	});
}

export default Component;
