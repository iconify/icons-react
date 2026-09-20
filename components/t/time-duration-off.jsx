import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yd3i1hf5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yd3i1hf5i"/>`,
		"fallback": "tabler:time-duration-off",
	});
}

export default Component;
