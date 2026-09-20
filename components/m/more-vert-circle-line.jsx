import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_cyjh5hd.css';
import '../../css/d/dawcsab1j.css';
import '../../css/d/d8mvshbpm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n_cyjh5hd"><path class="dawcsab1j"/><path class="d8mvshbpm"/></g>`,
		"fallback": "si:more-vert-circle-line",
	});
}

export default Component;
