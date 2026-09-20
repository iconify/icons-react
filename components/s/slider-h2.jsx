import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bg-drv1xu.css';
import '../../css/u/um-e79spk.css';
import '../../css/p/pxv3brbsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bg-drv1xu"/><path clip-rule="evenodd" class="um-e79spk"/><path class="pxv3brbsd"/></g>`,
		"fallback": "reicon:slider-h2",
	});
}

export default Component;
