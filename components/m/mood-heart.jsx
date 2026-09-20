import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lhkxwob5t.css';
import '../../css/e/eg4amjl6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lhkxwob5t"/><path class="eg4amjl6c"/></g>`,
		"fallback": "tabler:mood-heart",
	});
}

export default Component;
