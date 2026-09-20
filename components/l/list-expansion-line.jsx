import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-40_z1ey.css';
import '../../css/t/td92ekb3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-40_z1ey"/><path class="td92ekb3h"/>`,
		"fallback": "mingcute:list-expansion-line",
	});
}

export default Component;
