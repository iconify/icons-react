import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qghjcac2i.css';
import '../../css/s/smcke3big.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qghjcac2i"/><path class="smcke3big"/>`,
		"fallback": "energy-icons:tide-low-20-bold",
	});
}

export default Component;
