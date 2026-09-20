import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m7wy442bp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m7wy442bp"/>`,
		"fallback": "simple-icons:vivo",
	});
}

export default Component;
