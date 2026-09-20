import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rvjid9bus.css';
import '../../css/h/h_cml1bix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rvjid9bus"/><path class="h_cml1bix"/></g>`,
		"fallback": "keyline-icons:mic-off-two-tone",
	});
}

export default Component;
