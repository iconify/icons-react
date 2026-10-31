import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b61n60b8k.css';
import '../../css/a/ayp2htb2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b61n60b8k"/><path class="ayp2htb2f"/></g>`,
		"fallback": "coolicons:rabbit-duotone-round",
	});
}

export default Component;
