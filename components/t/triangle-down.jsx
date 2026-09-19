import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sklii6bbo.css';

const viewBox = {"width":240,"height":700};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sklii6bbo"/>`,
		"fallback": "il:triangle-down",
	});
}

export default Component;
