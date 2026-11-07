import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfw_9ua0h.css';
import '../../css/e/edzem2_sz.css';
import '../../css/t/t9lxmlx8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfw_9ua0h"/><path class="edzem2_sz"/><path class="t9lxmlx8r"/>`,
		"fallback": "solar:volleyball-2-bold-duotone",
	});
}

export default Component;
