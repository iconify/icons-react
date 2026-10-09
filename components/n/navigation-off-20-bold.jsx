import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwjx20d_k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwjx20d_k"/>`,
		"fallback": "energy-icons:navigation-off-20-bold",
	});
}

export default Component;
