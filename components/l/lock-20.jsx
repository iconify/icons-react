import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/prrieubjn.css';
import '../../css/o/o1dca9b1x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="prrieubjn"/><path class="o1dca9b1x"/>`,
		"fallback": "energy-icons:lock-20",
	});
}

export default Component;
