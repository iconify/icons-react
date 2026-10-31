import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dzd90kxwz.css';
import '../../css/k/kkwnspc3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dzd90kxwz"/><path class="kkwnspc3p"/></g>`,
		"fallback": "coolicons:package-upload-corner-bulk-round",
	});
}

export default Component;
