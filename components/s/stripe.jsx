import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3_p6ob_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r3_p6ob_z"/>`,
		"fallback": "hugeicons:stripe",
	});
}

export default Component;
