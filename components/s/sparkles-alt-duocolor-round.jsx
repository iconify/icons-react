import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/ff7aj8m0y.css';
import '../../css/a/a68azobdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ff7aj8m0y"/><path class="a68azobdc"/></g>`,
		"fallback": "coolicons:sparkles-alt-duocolor-round",
	});
}

export default Component;
