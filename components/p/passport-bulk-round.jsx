import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z-5yhbcwi.css';
import '../../css/v/vsw7y8i0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z-5yhbcwi"/><path class="vsw7y8i0v"/></g>`,
		"fallback": "coolicons:passport-bulk-round",
	});
}

export default Component;
