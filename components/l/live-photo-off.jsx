import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v_ns_2etk.css';
import '../../css/j/j9l20jbem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="v_ns_2etk"/><path class="j9l20jbem"/></g>`,
		"fallback": "tabler:live-photo-off",
	});
}

export default Component;
