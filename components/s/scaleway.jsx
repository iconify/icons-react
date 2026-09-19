import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ma23w-rvd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ma23w-rvd"/>`,
		"fallback": "cib:scaleway",
	});
}

export default Component;
