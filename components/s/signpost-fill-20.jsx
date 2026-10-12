import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dz7t-3bgi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dz7t-3bgi"/>`,
		"fallback": "garden:signpost-fill-20",
	});
}

export default Component;
