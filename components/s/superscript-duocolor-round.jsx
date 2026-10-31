import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sm1k5x4xf.css';
import '../../css/f/fxwoyf6jx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sm1k5x4xf"/><path class="fxwoyf6jx"/></g>`,
		"fallback": "coolicons:superscript-duocolor-round",
	});
}

export default Component;
