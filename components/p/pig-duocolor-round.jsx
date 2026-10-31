import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w06rjo-ky.css';
import '../../css/d/d1u0twgkf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="w06rjo-ky"/><path class="d1u0twgkf"/></g>`,
		"fallback": "coolicons:pig-duocolor-round",
	});
}

export default Component;
