import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lngqv7bke.css';
import '../../css/e/e-jy5zmeb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lngqv7bke"/><path class="e-jy5zmeb"/></g>`,
		"fallback": "coolicons:panel-right-open-duocolor-round",
	});
}

export default Component;
