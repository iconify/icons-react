import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z1sn-9bjn.css';
import '../../css/f/fpex59k2x.css';
import '../../css/y/y0i4r3btp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z1sn-9bjn"/><path class="fpex59k2x"/><path class="y0i4r3btp"/>`,
		"fallback": "energy-icons:lpg-tank-20-bold",
	});
}

export default Component;
