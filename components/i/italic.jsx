import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k7u3i_b_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k7u3i_b_d"/>`,
		"fallback": "hugeicons:italic",
	});
}

export default Component;
