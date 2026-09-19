import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iax61qb5b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iax61qb5b"/>`,
		"fallback": "fa6-solid:location-pin-lock",
	});
}

export default Component;
