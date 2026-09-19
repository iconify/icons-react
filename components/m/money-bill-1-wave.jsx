import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/moat_y9bu.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="moat_y9bu"/>`,
		"fallback": "fa6-solid:money-bill-1-wave",
	});
}

export default Component;
