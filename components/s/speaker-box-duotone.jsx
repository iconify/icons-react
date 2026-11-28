import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ihe6rwbiw.css';
import '../../css/y/y-sv2obge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ihe6rwbiw secondary"/><path class="primary y-sv2obge"/></g>`,
		"fallback": "iconaut:speaker-box-duotone",
	});
}

export default Component;
