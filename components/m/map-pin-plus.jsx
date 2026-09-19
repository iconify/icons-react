import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hyun090pu.css';
import '../../css/c/cy2n9jzik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hyun090pu"/><path class="cy2n9jzik"/></g>`,
		"fallback": "hugeicons:map-pin-plus",
	});
}

export default Component;
