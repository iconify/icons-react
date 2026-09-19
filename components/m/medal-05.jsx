import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/u083k3bmp.css';
import '../../css/p/p8lvfbblc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path clip-rule="evenodd" class="u083k3bmp"/><path class="p8lvfbblc"/></g>`,
		"fallback": "hugeicons:medal-05",
	});
}

export default Component;
