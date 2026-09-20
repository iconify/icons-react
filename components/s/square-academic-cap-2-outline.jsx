import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/svl9fqjaf.css';
import '../../css/e/erfnc4bpc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="svl9fqjaf"/><path class="erfnc4bpc"/></g>`,
		"fallback": "solar:square-academic-cap-2-outline",
	});
}

export default Component;
