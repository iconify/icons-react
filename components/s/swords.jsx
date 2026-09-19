import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/o/oi2kebc7w.css';
import '../../css/k/k4we2zbqk.css';
import '../../css/p/pivmfkj7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="oi2kebc7w"/><path class="k4we2zbqk"/><path class="pivmfkj7h"/></g>`,
		"fallback": "hugeicons:swords",
	});
}

export default Component;
