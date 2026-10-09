import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbbf18bwz.css';
import '../../css/b/b_eke94bd.css';
import '../../css/p/p415zm30i.css';
import '../../css/p/pt38gvb4c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbbf18bwz"/><path class="b_eke94bd"/><path class="p415zm30i"/><path class="pt38gvb4c"/>`,
		"fallback": "energy-icons:tidal-turbine-20",
	});
}

export default Component;
