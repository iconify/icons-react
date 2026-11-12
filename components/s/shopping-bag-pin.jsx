import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jsmqtmb6f.css';
import '../../css/b/by36zj_hl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jsmqtmb6f"/><path class="by36zj_hl"/></g>`,
		"fallback": "tabler:shopping-bag-pin",
	});
}

export default Component;
