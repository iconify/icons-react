import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ya7o16w0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ya7o16w0i"/>`,
		"fallback": "noviair:lightbulb",
	});
}

export default Component;
