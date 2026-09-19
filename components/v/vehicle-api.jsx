import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbyi58b3n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbyi58b3n"/>`,
		"fallback": "carbon:vehicle-api",
	});
}

export default Component;
