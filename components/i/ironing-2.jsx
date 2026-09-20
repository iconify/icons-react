import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uv9cyv-nu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uv9cyv-nu"/>`,
		"fallback": "tabler:ironing-2",
	});
}

export default Component;
