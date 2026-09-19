import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-2lw4d3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-2lw4d3f"/>`,
		"fallback": "hugeicons:third-brecket",
	});
}

export default Component;
