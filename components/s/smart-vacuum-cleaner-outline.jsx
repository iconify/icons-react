import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qv2_s9bhj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qv2_s9bhj"/>`,
		"fallback": "solar:smart-vacuum-cleaner-outline",
	});
}

export default Component;
