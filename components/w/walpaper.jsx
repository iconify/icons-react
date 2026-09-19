import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/r4o9d8iox.css';
import '../../css/v/vjoy73b1l.css';
import '../../css/r/rvnmxopdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="r4o9d8iox"/><circle class="vjoy73b1l"/><path class="rvnmxopdk"/></g>`,
		"fallback": "hugeicons:walpaper",
	});
}

export default Component;
