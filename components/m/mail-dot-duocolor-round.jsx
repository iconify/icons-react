import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/ryszp1bmf.css';
import '../../css/k/kwbihbtaz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ryszp1bmf"/><path class="kwbihbtaz"/></g>`,
		"fallback": "coolicons:mail-dot-duocolor-round",
	});
}

export default Component;
