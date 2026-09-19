import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3dv8bc_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r3dv8bc_z"/>`,
		"fallback": "hugeicons:sigma",
	});
}

export default Component;
