import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jhh5a0bgb.css';
import '../../css/n/new3wno1d.css';
import '../../css/d/dey5j6o-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jhh5a0bgb"/><path class="new3wno1d"/><path class="dey5j6o-q"/></g>`,
		"fallback": "tabler:storm-off",
	});
}

export default Component;
