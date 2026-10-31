import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gnr8r6a6v.css';
import '../../css/u/ukpdcrbbb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gnr8r6a6v"/><path class="ukpdcrbbb"/></g>`,
		"fallback": "struq:save",
	});
}

export default Component;
