import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oz_tv8bwy.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oz_tv8bwy"/>`,
		"fallback": "fa-brands:tripadvisor",
	});
}

export default Component;
