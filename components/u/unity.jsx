import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/goem8ebtm.css';

const viewBox = {"width":23,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="goem8ebtm"/>`,
		"fallback": "fontisto:unity",
	});
}

export default Component;
