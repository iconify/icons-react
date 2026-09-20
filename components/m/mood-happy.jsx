import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y-xl5827d.css';
import '../../css/r/rw3gunf6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="y-xl5827d"/><path class="rw3gunf6b"/></g>`,
		"fallback": "tabler:mood-happy",
	});
}

export default Component;
