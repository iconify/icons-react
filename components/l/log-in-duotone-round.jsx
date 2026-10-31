import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tt8p8-b4v.css';
import '../../css/c/c41uubbcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tt8p8-b4v"/><path class="c41uubbcp"/></g>`,
		"fallback": "coolicons:log-in-duotone-round",
	});
}

export default Component;
