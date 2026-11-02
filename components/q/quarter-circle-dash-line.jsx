import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ln7uv3d2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ln7uv3d2c"/>`,
		"fallback": "mingcute:quarter-circle-dash-line",
	});
}

export default Component;
