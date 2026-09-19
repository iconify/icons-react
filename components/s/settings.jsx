import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p5uqkacuj.css';
import '../../css/w/wzu1znbpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p5uqkacuj"/><path class="wzu1znbpg"/></g>`,
		"fallback": "ci:settings",
	});
}

export default Component;
