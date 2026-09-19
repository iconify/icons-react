import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cai0-yn1u.css';
import '../../css/y/y01026bwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="cai0-yn1u"/><path class="y01026bwi"/></g>`,
		"fallback": "hugeicons:save-off",
	});
}

export default Component;
