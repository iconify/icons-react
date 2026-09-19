import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l82wo8b1d.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l82wo8b1d"/>`,
		"fallback": "fa6-solid:plug-circle-minus",
	});
}

export default Component;
