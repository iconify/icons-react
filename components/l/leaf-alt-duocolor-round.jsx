import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h38a9ebel.css';
import '../../css/j/jzf08gbjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="h38a9ebel"/><path class="jzf08gbjp"/></g>`,
		"fallback": "coolicons:leaf-alt-duocolor-round",
	});
}

export default Component;
