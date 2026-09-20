import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n4n_sfbfu.css';
import '../../css/i/i2d4_mb8f.css';
import '../../css/y/ypu22vbic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n4n_sfbfu"/><path clip-rule="evenodd" class="i2d4_mb8f"/><path class="ypu22vbic"/></g>`,
		"fallback": "solar:laptop-bold-duotone",
	});
}

export default Component;
