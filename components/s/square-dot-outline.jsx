import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wv_uagb0m.css';
import '../../css/b/b1mn12bfd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wv_uagb0m"/><path clip-rule="evenodd" class="b1mn12bfd"/></g>`,
		"fallback": "solar:square-dot-outline",
	});
}

export default Component;
