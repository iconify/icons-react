import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxu4w7lou.css';

const viewBox = {"width":304,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxu4w7lou"/>`,
		"fallback": "zmdi:smartphone-android",
	});
}

export default Component;
