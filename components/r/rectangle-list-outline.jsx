import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lakha6bca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lakha6bca"/>`,
		"fallback": "flowbite:rectangle-list-outline",
	});
}

export default Component;
