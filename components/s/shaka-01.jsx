import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xyqja-u_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xyqja-u_i"/>`,
		"fallback": "hugeicons:shaka-01",
	});
}

export default Component;
