import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b26pr7bpk.css';
import '../../css/w/w_h69fh2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="b26pr7bpk"/><path class="w_h69fh2g"/></g>`,
		"fallback": "tabler:presentation",
	});
}

export default Component;
