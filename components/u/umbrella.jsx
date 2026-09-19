import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qrh2svbws.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qrh2svbws"/>`,
		"fallback": "fa6-solid:umbrella",
	});
}

export default Component;
