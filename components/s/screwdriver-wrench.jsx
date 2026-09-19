import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmlkhtbvf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pmlkhtbvf"/>`,
		"fallback": "fa6-solid:screwdriver-wrench",
	});
}

export default Component;
