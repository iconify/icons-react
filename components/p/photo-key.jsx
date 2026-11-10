import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jz02cezfb.css';
import '../../css/c/ce48pvosb.css';
import '../../css/f/fada9bbso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jz02cezfb"/><path class="ce48pvosb"/><path class="fada9bbso"/></g>`,
		"fallback": "tabler:photo-key",
	});
}

export default Component;
