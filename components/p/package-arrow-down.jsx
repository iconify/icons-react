import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k0qn4xc_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k0qn4xc_b"/>`,
		"fallback": "noviair:package-arrow-down",
	});
}

export default Component;
