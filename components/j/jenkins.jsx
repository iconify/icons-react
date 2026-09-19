import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvys67bog.css';

const viewBox = {"width":22,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvys67bog"/>`,
		"fallback": "fontisto:jenkins",
	});
}

export default Component;
