import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/finuhbbre.css';
import '../../css/p/p5nti_atx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="finuhbbre"/><path class="p5nti_atx"/></g>`,
		"fallback": "coolicons:link-vertical-duocolor-round",
	});
}

export default Component;
