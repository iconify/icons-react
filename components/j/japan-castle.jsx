import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cgg0w59fa.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cgg0w59fa"/>`,
		"fallback": "roentgen:japan-castle",
	});
}

export default Component;
