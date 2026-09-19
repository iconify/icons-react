import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwm4we_ur.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwm4we_ur"/>`,
		"fallback": "foundation:shield",
	});
}

export default Component;
