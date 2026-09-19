import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/m/mylx29b0f.css';
import '../../css/o/oksi2ib1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="mylx29b0f"/><path class="oksi2ib1q"/></g>`,
		"fallback": "hugeicons:pokemon",
	});
}

export default Component;
