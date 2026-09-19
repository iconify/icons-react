import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ay2yoh18g.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ay2yoh18g"/>`,
		"fallback": "dashicons:portfolio",
	});
}

export default Component;
