import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e53frpbez.css';
import '../../css/u/urlkpdmag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="e53frpbez"/><path class="urlkpdmag"/></g>`,
		"fallback": "coolicons:luggage-duocolor-round",
	});
}

export default Component;
