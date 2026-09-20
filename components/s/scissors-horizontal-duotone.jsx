import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/eu0_cqzeq.css';
import '../../css/b/bkofr4lgr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="eu0_cqzeq"/><path class="bkofr4lgr"/></g>`,
		"fallback": "keyline-icons:scissors-horizontal-duotone",
	});
}

export default Component;
