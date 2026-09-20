import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnb5g8bpa.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnb5g8bpa"/>`,
		"fallback": "memory:wall-front-gate",
	});
}

export default Component;
