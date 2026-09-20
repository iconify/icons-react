import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vnd3e8bsq.css';
import '../../css/n/nbvb_s3uu.css';
import '../../css/l/lke2lsb0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="vnd3e8bsq"/><path class="nbvb_s3uu"/><path class="lke2lsb0v"/></g>`,
		"fallback": "solar:text-field-focus-outline",
	});
}

export default Component;
