import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vtkkth74d.css';
import '../../css/v/vjsomnb_b.css';
import '../../css/r/r08jaibne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="vtkkth74d"/><path class="vjsomnb_b"/><path class="r08jaibne"/></g>`,
		"fallback": "withicons-bauhaus:red-lantern",
	});
}

export default Component;
