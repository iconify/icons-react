import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pd6mrqd0g.css';
import '../../css/r/rd7qjtxmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pd6mrqd0g"/><path class="rd7qjtxmb"/></g>`,
		"fallback": "coolicons:letter-spacing-duocolor-round",
	});
}

export default Component;
