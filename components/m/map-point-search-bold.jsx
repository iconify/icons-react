import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-1-tpf5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y-1-tpf5d"/>`,
		"fallback": "solar:map-point-search-bold",
	});
}

export default Component;
