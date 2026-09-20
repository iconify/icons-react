import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bmi8an0_o.css';
import '../../css/u/ugn31mube.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path clip-rule="evenodd" class="bmi8an0_o"/><path class="ugn31mube"/></g>`,
		"fallback": "keyline-icons:map-pin-minus-fill",
	});
}

export default Component;
