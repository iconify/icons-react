import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6k-rlb6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o6k-rlb6f"/>`,
		"fallback": "mdi:skip-previous-outline",
	});
}

export default Component;
