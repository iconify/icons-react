import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iy-s0bbvs.css';

const viewBox = {"width":1000,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iy-s0bbvs"/>`,
		"fallback": "websymbol:search",
	});
}

export default Component;
