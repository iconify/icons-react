import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/us8s3xbdr.css';
import '../../css/t/tnp71db6o.css';
import '../../css/y/y27_e5rxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="us8s3xbdr"/><path clip-rule="evenodd" class="tnp71db6o"/><path class="y27_e5rxz"/></g>`,
		"fallback": "solar:smart-speaker-bold-duotone",
	});
}

export default Component;
