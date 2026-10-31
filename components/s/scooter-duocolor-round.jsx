import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v72755vqx.css';
import '../../css/j/js34wb59d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="v72755vqx"/><path class="js34wb59d"/></g>`,
		"fallback": "coolicons:scooter-duocolor-round",
	});
}

export default Component;
