import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v49pi3bmt.css';
import '../../css/q/qoebk6oie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="v49pi3bmt"/><path class="qoebk6oie"/></g>`,
		"fallback": "keyline-icons:sun-medium-fill",
	});
}

export default Component;
