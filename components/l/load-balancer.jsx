import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w8rd1c17g.css';
import '../../css/v/vlucz_8vk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="w8rd1c17g"/><path class="vlucz_8vk"/></g>`,
		"fallback": "tabler:load-balancer",
	});
}

export default Component;
