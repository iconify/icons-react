import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5pd03bym.css';
import '../../css/i/imsrai5rb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5pd03bym"/><path clip-rule="evenodd" class="imsrai5rb"/>`,
		"fallback": "solar:pie-chart-3-bold-duotone",
	});
}

export default Component;
