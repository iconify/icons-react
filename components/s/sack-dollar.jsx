import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfmmmw5bm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vfmmmw5bm"/>`,
		"fallback": "fa6-solid:sack-dollar",
	});
}

export default Component;
