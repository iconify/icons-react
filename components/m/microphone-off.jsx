import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lhr3fmb-r.css';
import '../../css/e/eio33vvze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lhr3fmb-r"/><path class="eio33vvze"/></g>`,
		"fallback": "tabler:microphone-off",
	});
}

export default Component;
