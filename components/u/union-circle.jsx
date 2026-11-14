import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/z09_8kduf.css';
import '../../css/g/gjly36blb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="z09_8kduf"/><path class="gjly36blb"/></g>`,
		"fallback": "hugeicons:union-circle",
	});
}

export default Component;
