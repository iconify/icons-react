import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1i2_yktj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1i2_yktj"/>`,
		"fallback": "mdi:report-scatter-plot-hexbin",
	});
}

export default Component;
