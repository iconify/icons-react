import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ic8udy9nn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ic8udy9nn"/>`,
		"fallback": "garden:lightbulb-stroke-20",
	});
}

export default Component;
