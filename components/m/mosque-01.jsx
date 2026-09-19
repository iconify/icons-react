import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/srj636mrs.css';
import '../../css/h/h2e1x5b3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="srj636mrs"/><path class="h2e1x5b3h"/></g>`,
		"fallback": "hugeicons:mosque-01",
	});
}

export default Component;
