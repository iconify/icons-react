import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s8f30sbsx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s8f30sbsx"/>`,
		"fallback": "dashicons:tablet",
	});
}

export default Component;
