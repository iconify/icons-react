import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9-lp9e9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m9-lp9e9e"/>`,
		"fallback": "lucide:shopping-basket",
	});
}

export default Component;
