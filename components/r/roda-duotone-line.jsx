import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nlnt3cb3k.css';
import '../../css/b/bk-aojb_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nlnt3cb3k"/><path clip-rule="evenodd" class="bk-aojb_e"/></g>`,
		"fallback": "lets-icons:roda-duotone-line",
	});
}

export default Component;
