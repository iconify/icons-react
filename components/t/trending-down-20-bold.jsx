import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/spqow63td.css';
import '../../css/o/oodxeba0n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="spqow63td"/><path class="oodxeba0n"/>`,
		"fallback": "energy-icons:trending-down-20-bold",
	});
}

export default Component;
