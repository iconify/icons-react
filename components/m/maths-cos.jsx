import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amrhr5zub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="amrhr5zub"/>`,
		"fallback": "mdi:maths-cos",
	});
}

export default Component;
