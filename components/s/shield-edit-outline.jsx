import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dc20-fbnj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dc20-fbnj"/>`,
		"fallback": "mdi:shield-edit-outline",
	});
}

export default Component;
