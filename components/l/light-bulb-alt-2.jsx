import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/of4_u7bux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b of4_u7bux"/>`,
		"fallback": "boxicons:light-bulb-alt-2",
	});
}

export default Component;
