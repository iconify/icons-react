import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dio1l6b5t.css';
import '../../css/u/ubqfwcbya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dio1l6b5t"/><path class="ubqfwcbya"/></g>`,
		"fallback": "coolicons:timer-duocolor-round",
	});
}

export default Component;
