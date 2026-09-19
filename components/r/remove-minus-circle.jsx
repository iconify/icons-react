import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vl4e5zrno.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vl4e5zrno"/>`,
		"fallback": "ci:remove-minus-circle",
	});
}

export default Component;
