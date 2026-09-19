import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2-g-ztup.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w2-g-ztup"/>`,
		"fallback": "fa6-solid:location-arrow",
	});
}

export default Component;
