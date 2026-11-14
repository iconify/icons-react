import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/ts1p9cxua.css';
import '../../css/b/bw5gewb3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ts1p9cxua"/><path class="bw5gewb3k"/></g>`,
		"fallback": "hugeicons:umbrella-off",
	});
}

export default Component;
