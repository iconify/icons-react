import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b6z_6gb_e.css';
import '../../css/s/so0nzbd7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="b6z_6gb_e"/><path class="so0nzbd7l"/></g>`,
		"fallback": "coolicons:laptop-duocolor-round",
	});
}

export default Component;
