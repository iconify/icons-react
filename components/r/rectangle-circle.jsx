import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/ut3jwge_g.css';
import '../../css/u/un61p4w6l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="ut3jwge_g"/><path class="un61p4w6l"/></g>`,
		"fallback": "hugeicons:rectangle-circle",
	});
}

export default Component;
