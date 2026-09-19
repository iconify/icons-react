import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrm7n2blh.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xrm7n2blh"/>`,
		"fallback": "fa-solid:umbrella",
	});
}

export default Component;
