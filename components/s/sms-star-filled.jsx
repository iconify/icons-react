import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ak9bfpscw.css';
import '../../css/u/u4zaor01v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ak9bfpscw"/><path class="u4zaor01v"/></g>`,
		"fallback": "reicon:sms-star-filled",
	});
}

export default Component;
