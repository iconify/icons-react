import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gtmxuwkrn.css';
import '../../css/v/v0zur3bmx.css';
import '../../css/n/n3cj5wcax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="gtmxuwkrn"/><path class="v0zur3bmx"/><path class="n3cj5wcax"/></g>`,
		"fallback": "reicon:mic2-duotone",
	});
}

export default Component;
