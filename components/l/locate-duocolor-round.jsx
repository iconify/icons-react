import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u0grsjsan.css';
import '../../css/c/ccvet5pco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="u0grsjsan"/><path class="ccvet5pco"/></g>`,
		"fallback": "coolicons:locate-duocolor-round",
	});
}

export default Component;
