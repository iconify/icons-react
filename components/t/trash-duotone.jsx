import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ie9sz2bvn.css';
import '../../css/x/xf-qzbc4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ie9sz2bvn"/><path clip-rule="evenodd" class="xf-qzbc4k"/></g>`,
		"fallback": "reicon:trash-duotone",
	});
}

export default Component;
