import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b2cclbc5c.css';
import '../../css/s/sym4x4b5v.css';
import '../../css/f/fw-vshkfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b2cclbc5c"/><path clip-rule="evenodd" class="sym4x4b5v"/><path class="fw-vshkfs"/></g>`,
		"fallback": "reicon:passport-duotone",
	});
}

export default Component;
