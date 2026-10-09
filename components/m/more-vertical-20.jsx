import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m799961bn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m799961bn"/>`,
		"fallback": "energy-icons:more-vertical-20",
	});
}

export default Component;
