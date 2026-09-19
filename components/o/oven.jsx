import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qmgwshmqq.css';
import '../../css/c/ck59up55h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qmgwshmqq"/><path class="ck59up55h"/></g>`,
		"fallback": "hugeicons:oven",
	});
}

export default Component;
