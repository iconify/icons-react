import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f_362pbxn.css';
import '../../css/m/mck32ob9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="f_362pbxn"/><path class="mck32ob9h"/></g>`,
		"fallback": "feather:watch",
	});
}

export default Component;
