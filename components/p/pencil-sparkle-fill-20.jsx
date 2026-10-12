import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4e8n_k1c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4e8n_k1c"/>`,
		"fallback": "garden:pencil-sparkle-fill-20",
	});
}

export default Component;
