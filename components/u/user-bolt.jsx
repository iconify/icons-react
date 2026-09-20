import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lykg3ubvh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lykg3ubvh"/>`,
		"fallback": "tabler:user-bolt",
	});
}

export default Component;
