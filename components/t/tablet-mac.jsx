import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2qjncbqa.css';

const viewBox = {"width":408,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2qjncbqa"/>`,
		"fallback": "zmdi:tablet-mac",
	});
}

export default Component;
