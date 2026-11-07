import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/er9_2_bjd.css';
import '../../css/v/vg928d-qd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="er9_2_bjd"/><path class="vg928d-qd"/>`,
		"fallback": "solar:square-dot-bold-duotone",
	});
}

export default Component;
