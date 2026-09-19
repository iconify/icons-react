import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-v909bxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-v909bxc"/>`,
		"fallback": "hugeicons:key-01",
	});
}

export default Component;
