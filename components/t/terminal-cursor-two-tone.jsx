import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lfpevtz9v.css';
import '../../css/k/k4tuz2b5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lfpevtz9v"/><path class="k4tuz2b5x"/></g>`,
		"fallback": "keyline-icons:terminal-cursor-two-tone",
	});
}

export default Component;
