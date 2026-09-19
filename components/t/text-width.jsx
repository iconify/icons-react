import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3fnezkjq.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l3fnezkjq"/>`,
		"fallback": "fa6-solid:text-width",
	});
}

export default Component;
