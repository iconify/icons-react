import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kjc38d2gm.css';
import '../../css/v/v1ewclboy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kjc38d2gm"/><path class="v1ewclboy"/></g>`,
		"fallback": "hugeicons:protection-mask",
	});
}

export default Component;
