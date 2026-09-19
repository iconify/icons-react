import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mmjo6rbpz.css';
import '../../css/k/kfw9gf8gq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mmjo6rbpz"/><path class="kfw9gf8gq"/></g>`,
		"fallback": "heroicons-outline:location-marker",
	});
}

export default Component;
