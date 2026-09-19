import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-lk33bma.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-lk33bma"/>`,
		"fallback": "at-icons:mesh-polygon",
	});
}

export default Component;
