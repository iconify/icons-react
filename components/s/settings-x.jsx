import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ic6uh_e1q.css';
import '../../css/u/ubfs53lam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ic6uh_e1q"/><path class="ubfs53lam"/></g>`,
		"fallback": "tabler:settings-x",
	});
}

export default Component;
