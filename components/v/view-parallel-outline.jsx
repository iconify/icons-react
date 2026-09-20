import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7i6n6b8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7i6n6b8w"/>`,
		"fallback": "mdi:view-parallel-outline",
	});
}

export default Component;
