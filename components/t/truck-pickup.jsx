import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbvjn4b1d.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbvjn4b1d"/>`,
		"fallback": "fa6-solid:truck-pickup",
	});
}

export default Component;
