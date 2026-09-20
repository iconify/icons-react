import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/elcq1wb7f.css';
import '../../css/d/dffv2jbav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="elcq1wb7f"/><path class="dffv2jbav"/></g>`,
		"fallback": "streamline-ultimate:insurance-head",
	});
}

export default Component;
