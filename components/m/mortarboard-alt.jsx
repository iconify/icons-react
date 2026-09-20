import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nwindnbjv.css';
import '../../css/t/tajxpcbfy.css';
import '../../css/b/bdaj99b_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nwindnbjv"/><path class="tajxpcbfy"/><path class="bdaj99b_n"/></g>`,
		"fallback": "lets-icons:mortarboard-alt",
	});
}

export default Component;
