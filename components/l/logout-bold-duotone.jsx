import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hnqp7eb9p.css';
import '../../css/t/tsxl3yofp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hnqp7eb9p"/><path clip-rule="evenodd" class="tsxl3yofp"/>`,
		"fallback": "solar:logout-bold-duotone",
	});
}

export default Component;
