import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tcebbxirw.css';
import '../../css/m/m374-eb6o.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tcebbxirw"/><path class="m374-eb6o"/>`,
		"fallback": "lineicons:paypal-original",
	});
}

export default Component;
