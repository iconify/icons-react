import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/w6tur-iog.css';
import '../../css/f/f7su19blu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="w6tur-iog"/><path class="f7su19blu"/></g>`,
		"fallback": "hugeicons:server-stack-01",
	});
}

export default Component;
