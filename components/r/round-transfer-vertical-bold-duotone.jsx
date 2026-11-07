import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gt4erfbgl.css';
import '../../css/d/dqvo1yxlg.css';
import '../../css/c/ccsmm3hcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gt4erfbgl"/><path class="dqvo1yxlg"/><path class="ccsmm3hcj"/>`,
		"fallback": "solar:round-transfer-vertical-bold-duotone",
	});
}

export default Component;
