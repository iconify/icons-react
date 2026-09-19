import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0cbblbuo.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0cbblbuo"/>`,
		"fallback": "fa6-brands:square-web-awesome-stroke",
	});
}

export default Component;
