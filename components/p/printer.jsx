import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i-r7qgboq.css';
import '../../css/m/mto1a6gii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="i-r7qgboq"/><rect class="mto1a6gii"/></g>`,
		"fallback": "meteor-icons:printer",
	});
}

export default Component;
