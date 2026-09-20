import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/aedxwpvkb.css';
import '../../css/y/y49xkx6yn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="aedxwpvkb"/><path class="y49xkx6yn"/></g>`,
		"fallback": "tabler:report",
	});
}

export default Component;
