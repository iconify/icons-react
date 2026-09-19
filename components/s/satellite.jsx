import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2cfx4_um.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b2cfx4_um"/>`,
		"fallback": "fa6-solid:satellite",
	});
}

export default Component;
