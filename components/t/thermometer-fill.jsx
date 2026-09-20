import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/soa8f9bkz.css';
import '../../css/v/vcjl3_weu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="soa8f9bkz"/><path class="vcjl3_weu"/></g>`,
		"fallback": "keyline-icons:thermometer-fill",
	});
}

export default Component;
