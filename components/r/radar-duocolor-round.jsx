import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ujwe07b4z.css';
import '../../css/q/qyxh9bbtn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ujwe07b4z"/><path class="qyxh9bbtn"/></g>`,
		"fallback": "coolicons:radar-duocolor-round",
	});
}

export default Component;
