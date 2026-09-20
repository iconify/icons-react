import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s2yr7sb8z.css';
import '../../css/z/znwhyskoy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="s2yr7sb8z"/><path class="znwhyskoy"/></g>`,
		"fallback": "tabler:matchstick",
	});
}

export default Component;
