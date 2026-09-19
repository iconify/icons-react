import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m7auvk44b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m7auvk44b"/>`,
		"fallback": "cil:justify-right",
	});
}

export default Component;
