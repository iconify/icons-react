import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y4e6zl6iu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y4e6zl6iu"/>`,
		"fallback": "dashicons:plus",
	});
}

export default Component;
