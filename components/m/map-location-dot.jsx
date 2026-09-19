import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxk7nn9kn.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxk7nn9kn"/>`,
		"fallback": "fa6-solid:map-location-dot",
	});
}

export default Component;
