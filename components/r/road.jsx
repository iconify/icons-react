import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owboirb8u.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owboirb8u"/>`,
		"fallback": "fa6-solid:road",
	});
}

export default Component;
