import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/txevhf_9f.css';
import '../../css/b/b5iv4zbyk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="txevhf_9f"/><path class="b5iv4zbyk"/></g>`,
		"fallback": "coolicons:pencil-sparkle-duotone-round",
	});
}

export default Component;
