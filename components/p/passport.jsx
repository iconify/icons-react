import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/st7_mloem.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="st7_mloem"/>`,
		"fallback": "fa-solid:passport",
	});
}

export default Component;
