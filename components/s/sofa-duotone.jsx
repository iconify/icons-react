import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vnmd9hble.css';
import '../../css/g/gyoi56byy.css';
import '../../css/u/ude7ekbet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vnmd9hble"/><path clip-rule="evenodd" class="gyoi56byy"/><path class="ude7ekbet"/></g>`,
		"fallback": "keyline-icons:sofa-duotone",
	});
}

export default Component;
