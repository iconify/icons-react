import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u12i6ub3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u12i6ub3d"/>`,
		"fallback": "tabler:rubber-stamp",
	});
}

export default Component;
