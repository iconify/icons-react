import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eu_9tcoym.css';

const viewBox = {"width":440,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eu_9tcoym"/>`,
		"fallback": "zmdi:redo",
	});
}

export default Component;
